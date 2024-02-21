import { useEffect, useState } from "react";
import AdminLayout from "../../../components/admin/adminLayout";
import styles from "../../../styles/admin/testimonials.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { queryClient } from "../../_app";
import {
  deleteDataById,
  getAllData,
  getDataById,
  updateDataById,
  uploadData,
} from "../../../utils/firebase_data_handler";
import { useQuery } from "@tanstack/react-query";
import { FiEdit2 } from "react-icons/fi";
import { HiEye } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";

function Model(props) {
  const { id, show, type, name } = props;
  const [loading, setLoading] = useState(false);

  const DetailsData = useQuery(
    [`${name}/${id}`],
    () => {
      return getDataById(`${name}/${id}`);
    },
    {
      staleTime: 10000 * 60,
      enabled: !!id,
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name: e.target[0].value,      
      content: e.target[1].value,
      url: e.target[2].value,
    };
    if (type === "edit")
      updateDataById(data, `${name}/${id}`).then((res) => {
        if (res.message === "success") {
          queryClient.invalidateQueries(`${name}`);
          alert("Edited"), setLoading(false), props.onHide();
        } else {
          alert("Error"), setLoading(false), props.onHide();
        }
      });
    else
      uploadData(data, `${name}`).then(
        () => alert("Added"),
        setLoading(false),
        props.onHide()
      );
  };

  const handleDelete = () => {
    setLoading(true);
    deleteDataById(`${name}/${id}`).then((res) => {
      if (res.message === "success") {
        alert("Deleted"), setLoading(false), props.onHide();
      } else {
        alert("Error"), setLoading(false), props.onHide();
      }
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-titlevcenter">
          {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {type === "view" ? (
          <section>
            <h6>Name</h6>
            <h3>{DetailsData.data?.data.name}</h3>
            <br />            
            <h6>Content</h6>
            <h3>{DetailsData.data?.data.content}</h3>
            <br />
            <h6>Url</h6>
            <h3>{DetailsData.data?.data.url}</h3>
            <br />
          </section>
        ) : type != "delete" ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={DetailsData ? DetailsData.data?.data.name : ""}
              />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={DetailsData ? DetailsData.data?.data.content : ""}
              />
              <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Url</Form.Label>
              <Form.Control
                type="text"
                defaultValue={DetailsData ? DetailsData.data?.data.url : ""}
              />
            </Form.Group>
            </Form.Group>
            <Button variant="success" type="submit">
              {loading ? "Uploading..." : "Upload"}
            </Button>
          </Form>
        ) : (
          <p>Do you want Delete this</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        {type === "delete" ? (
          <Button variant="danger" type="submit" onClick={handleDelete}>
            Delete
          </Button>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
}

function Index() {
  const [modalShow, setModalShow] = useState(false);
  const [type, setType] = useState("add");
  const [id, setID] = useState();

  const packarma_videoData = useQuery(
    ["packarma_video"],
    () => {
      return getAllData("packarma_video");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  return (
    <AdminLayout>
      <div className={styles.testimonials}>
        <br />
        <div className={styles.head}>
          <h2>How to use App</h2>
          <Button
            variant="success"
            onClick={() => {
              setModalShow(true);
              setType("add");
              setID(null);
            }}
          >
            Add
          </Button>
        </div>
        <hr />
        <div className={styles.all_testimonials}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Content</th>
                <th>Url</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {packarma_videoData.data?.data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    {item.content.length > 50
                      ? item.content.substring(0, 50) + "..."
                      : item.content}
                  </td>
                  <td>{item.url}</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <FiEdit2
                      size={20}
                      onClick={() => {
                        setModalShow(true);
                        setType("edit");
                        setID(item.id);
                      }}
                    />
                    <HiEye
                      size={20}
                      onClick={() => {
                        setModalShow(true);
                        setType("view");
                        setID(item.id);
                      }}
                    />
                    <AiFillDelete
                      size={20}
                      onClick={() => {
                        setModalShow(true);
                        setType("delete");
                        setID(item.id);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Model
        show={modalShow}
        type={type}
        id={id}
        name={"packarma_video"}
        onHide={() => setModalShow(false)}
      />
    </AdminLayout>
  );
}

export default Index;
