import { useEffect, useState } from "react";
import AdminLayout from "../../../components/admin/adminLayout";
import styles from "../../../styles/admin/testimonials.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  deleteDataById,
  getAllData,
  getDataById,
  uploadData,
} from "../../../utils/firebase_data_handler";
import { useQuery } from "@tanstack/react-query";
import { HiEye } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { queryClient } from "../../_app";

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
      title: e.target[1].value,
      content: e.target[2].value,
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
        queryClient.invalidateQueries(`${name}`);
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
        <Modal.Title id="contained-modal-title-vcenter">
          {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {type === "view" ? (
          <section>
          <h6>From</h6>
            <h3>{DetailsData.data?.data.from}</h3>
            <br />
            <h6>Email</h6>
            <h3>{DetailsData.data?.data.email}</h3>
            <br />
            <h6>Date</h6>
            <h3>{DetailsData.data?.data.date}</h3>
            <br />
            <h6>Name</h6>
            <h3>{DetailsData.data?.data.name}</h3>
            <br />
            <h6>Number</h6>
            <h3>{DetailsData.data?.data.number}</h3>
            <br />
            <h6>Message</h6>
            <h3>{DetailsData.data?.data.message}</h3>
            <br />
          </section>
        ) : type === "delete" ? (
          <p>Do you want Delete this</p>
        ) : null}
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

  const contactData = useQuery(
    ["contacts"],
    () => {
      return getAllData("contacts");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  return (
    <AdminLayout>
      <div className={styles.testimonials}>
        <div className={styles.head}>
          <h2>Contact</h2>
        </div>
        <hr />
        <div className={styles.all_testimonials}>
          <table>
            <thead>
              <tr>
              <th>From</th>
                <th>Email</th>
                <th>Name</th>
                <th>Date</th>
                <th>Message</th>
                <th>Number</th>
                <th>Options</th>
              </tr>
            </thead>

            <tbody>
              {contactData.data?.data.sort((a, b) => new Date(b.date) - new Date(a.date)).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.from}</td>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.message}</td>
                    <td>{item.number}</td>

                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
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
                );
              })}
              {/* map contact in decending order order */}


            </tbody>
          </table>
        </div>
      </div>
      <Model
        show={modalShow}
        type={type}
        id={id}
        name={"contacts"}
        onHide={() => setModalShow(false)}
      />
    </AdminLayout>
  );
}

export default Index;
