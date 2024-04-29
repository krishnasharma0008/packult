import { useEffect, useState } from "react";
import AdminLayout from "../../../components/admin/adminLayout";
import styles from "../../../styles/admin/testimonials.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  deleteDataById,
  getAllData,
  getDataById,
  updateDataById,
  uploadData,
} from "../../../utils/firebase_data_handler";
import { useQuery } from "@tanstack/react-query";
import { AiFillDelete } from "react-icons/ai";
import { uploadImage } from "../../../utils/firebase_image_upload";
import { queryClient } from "../../_app";
import { Accordion } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";

function Model(props) {
  const { id, show, type, name } = props;
  const [loading, setLoading] = useState(false);

  console.log(id);

  // useEffect(() => {
  //   if (type === "edit") {
  //     setLoading(true);
  //   }
  // }, [type]);

  const DetailsData = useQuery(
    [name, id],
    () => {
      return getDataById(`${name}/${id}`);
    },
    {
      staleTime: 10000 * 60,
      enabled: !!id,
    }
  );

  // Define a state to hold the selected work hours
const [selectedWorkHours, setSelectedWorkHours] = useState(DetailsData?.data?.data.workHours || "Part-Time");

// Function to handle radio button change
const handleRadioChange = (value) => {
  setSelectedWorkHours(value);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value);
    // console.log(e.target[3].value);
    // console.log(e.target[3].value);

    const data = {
      designation: e.target[0].value,
      workHours: e.target[1].checked === "Part-Time" ? "Part-Time" : "Full-Time",
      exp: e.target[3].value,
      location: e.target[4].value,
    };
    //console.log("Form input value:", e.target[1].checked);
    //console.log(data);
    if (type === "edit") {
      updateDataById(data, `careers/${id}`).then((res) => {
        if (res.message === "success") {
          props.onHide();
          setLoading(false);

          queryClient.invalidateQueries("careers");
        } else {
          alert("Data Upload Failed.");
          console.log(res.data);
        }
      });
    } else {
      uploadData(data, "careers").then((res) => {
        if (res.message === "success") {
          props.onHide();
          setLoading(false);
          queryClient.invalidateQueries("careers");
        } else {
          alert("Data Upload Failed.");
          console.log(res.data);
        }
      });
    }
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
        <Modal.Title id="contained-modal-title-vcenter">
          {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {type != "delete" ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                defaultValue={
                  DetailsData ? DetailsData.data?.data.designation : ""
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Work Hours</Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Part-Time"
                    name="workHours"
                    value="Part-Time"
                    type={type}
                    // defaultChecked={
                    //   DetailsData?.data?.data.workHours === "Part-Time"
                    //     ? true
                    //     : false
                    // }
                    checked={DetailsData?.data?.data.workHours === "Part-Time"?true:false}
                    onChange={() => handleRadioChange("Full-Time")}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Full-Time"
                    name="workHours"
                    value="Full-Time"
                    // defaultChecked={
                    //   DetailsData?.data?.data.workHours === "Full-Time"
                    //     ? true
                    //     : false
                    // }
                    checked={DetailsData?.data?.data.workHours === "Full-Time"?true:false}
                    onChange={() => handleRadioChange("Full-Time")}
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Years of Experience</Form.Label>
              <Form.Control
                type="text"
                style={{ width: "10%" }}
                defaultValue={DetailsData ? DetailsData.data?.data.exp : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                defaultValue={
                  DetailsData ? DetailsData.data?.data.location : ""
                }
              />
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
  const [careerId, setCareerId] = useState(undefined);
  const [selectedId, setSelectedId] = useState(undefined);
  const [selectedData, setSelectedData] = useState(undefined);

  const [loading, setLoading] = useState(false);

  const TableData = useQuery(
    ["careers"],
    () => {
      return getAllData("careers");
    },
    {
      staleTime: 10000 * 60,
    }
  );
  const ImageData = useQuery(
    ["careers_images"],
    () => {
      return getAllData("careers_images");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  const apllicatnsDataByCareerId = useQuery(
    ["careers", careerId, "applicants"],
    () => {
      return getAllData(`careers/${careerId}/applicants`);
    },
    {
      staleTime: 10000 * 60,
      enabled: !!careerId,
    }
  );

  useEffect(() => {
    if (
      apllicatnsDataByCareerId &&
      apllicatnsDataByCareerId.data &&
      apllicatnsDataByCareerId.data.data
    ) {
      setSelectedData(apllicatnsDataByCareerId.data.data);
    }
  }, [apllicatnsDataByCareerId]);

  const handleSubmitImage = (e) => {
    e.preventDefault();
    const image = e.target[0].files[0];
    const caption = e.target[1].value;

    const resp = uploadImage(image, `Careers`);
    resp.then((res) => {
      if (res.message === "success") {
        const data = {
          caption: caption,
          image: res.data,
        };
        uploadData(data, "careers_images").then((res) => {
          if (res.message === "success") {
            alert("Image Uploaded");
            queryClient.invalidateQueries("careers_images");
          }
        });
      } else {
        alert("Image Upload Failed");
      }
    });
  };

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const deleteDesignation = (id) => {
    setLoading(true);
    deleteDataById(`careers/${id}`).then((res) => {
      if (res.message === "success") {
        queryClient.invalidateQueries(`careers`);
      }
    });
  };

  const deleteApplication = (designation, id) => {
    setLoading(true);
    deleteDataById(`careers/${designation}/applicants/${id}`).then((res) => {
      if (res.message === "success") {
        queryClient.invalidateQueries(`careers`);
      }
    });
  };

  return (
    <AdminLayout>
      <div className={styles.testimonials}>
        <br />
        <div className={styles.head}>
          <h2>Careers Picture</h2>
        </div>
        <hr />
        <form
          className="d-flex "
          onSubmit={handleSubmitImage}
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            {previewUrl ? (
              <Image
                src={previewUrl}
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
                alt="Preview"
              />
            ) : (
              <label
                for="fileUpload"
                style={{
                  background: "#C2D950",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Click to Upload Image
              </label>
            )}
          </div>
          {/* {!previewUrl ? ( */}

          <>
            <input
              type="file"
              id="fileUpload"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <input
              type="text"
              placeholder="Caption"
              id="caption"
              style={{
                height: "30px",
                borderRadius: "5px",
                padding: "0 10px",
              }}
            />{" "}
            <Button variant="success" type="submit">
              Upload
            </Button>
          </>
        </form>

        {/* input with image preview */}

        <div className={"d-flex " + styles.all_testimonials}>
          {ImageData.data?.data.map((item, index) => {
            return (
              <div key={index} style={{ width: "200px", margin: "10px" }}>
                <Image
                  width={200}
                  height={200}
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                  alt="Picture of the author"
                  src={item.image}
                />

                <div
                  className="d-flex     "
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <h5>{item.caption}</h5>

                  <AiFillDelete
                    size={24}
                    fill="red"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      deleteDataById(`careers_images/${item.id}`).then(
                        (res) => {
                          if (res.message === "success") {
                            alert("Deleted");
                            queryClient.invalidateQueries("careers_images");
                          }
                        }
                      );
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <br />
        <div className={styles.head}>
          <h2>Careers</h2>
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
          <Accordion defaultActiveKey="0">
            {TableData.data?.data.map((items, index) => {
              return (
                <Accordion.Item
                  key={index}
                  eventKey={index}
                  onClick={() => {
                    setCareerId(items.id);
                  }}
                >
                  <Accordion.Header>
                    {items.designation} | {items.workHours} | {items.exp} |{" "}
                    {items.location}
                  </Accordion.Header>
                  <Accordion.Body>
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Date</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Doc</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedData?.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.name}</td>
                              <td>{item.date}</td>
                              <td>{item.phone}</td>
                              <td>{item.email}</td>
                              <td>
                                <a href={item.doc} download>
                                  Download
                                </a>
                              </td>
                              <td
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                {/* <HiEye size={20} /> */}
                                <AiFillDelete
                                  size={20}
                                  style={{
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    deleteApplication(items.id, item.id);
                                  }}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <hr />
                    <AiFillDelete
                      fill="red"
                      style={{
                        cursor: "pointer",
                      }}
                      size={20}
                      onClick={() => {
                        deleteDesignation(items.id);
                      }}
                    />

                    <FiEdit2
                      className="ms-2"
                      size={16}
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setModalShow(true);
                        setType("edit");
                        setID(items.id);
                      }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
      <Model
        show={modalShow}
        type={type}
        id={id}
        name={"careers"}
        onHide={() => setModalShow(false)}
      />
    </AdminLayout>
  );
}

export default Index;
