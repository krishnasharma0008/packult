import { useEffect, useState } from "react";
import AdminLayout from "../../../components/admin/adminLayout";
import styles from "../../../styles/admin/testimonials.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Image from "next/image";
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
import { uploadImage } from "../../../utils/firebase_image_upload";

function Index() {

  const [id, setID] = useState();


  const ImageData = useQuery(
    ["packarma_offer_images"],
    () => {
      return getAllData("packarma_offer_images");
    },
    {
      staleTime: 10000 * 60,
    }
  );
  const handleSubmitImage = (e) => {
    e.preventDefault();
    const image = e.target[0].files[0];
    const caption = e.target[1].value;

    const resp = uploadImage(image, `packarma_offer`);
    resp.then((res) => {
      if (res.message === "success") {
        const data = {
          caption: caption,
          image: res.data,
        };
        uploadData(data, "packarma_offer_images").then((res) => {
          if (res.message === "success") {
            alert("Image Uploaded");
            queryClient.invalidateQueries("packarma_offer_images");
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

  return (
    <AdminLayout>
      <div className={styles.testimonials}>
        <br />
        <div className={styles.head}>
          <h2>Packarma Offer</h2>
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
        <br />
        <br />

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
                      deleteDataById(`packarma_offer_images/${item.id}`).then(
                        (res) => {
                          if (res.message === "success") {
                            alert("Deleted");
                            queryClient.invalidateQueries("packarma_offer_images");
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
        {/* <div className={styles.head}>
          <h2>Testimonials</h2>
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
        <hr /> */}
        {/* <div className={styles.all_testimonials}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Content</th>
                <th>Designation</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody> */}
              {/* {testimonialData.data?.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    {/* map items here */}

                    {/* <td>{item.name}</td>
                    <td>
                      {item.content.length > 50
                        ? item.content.substring(0, 50) + "..."
                        : item.content}
                    </td>
                    <td>{item.designation}</td>
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
                );
              })} */} 
            {/* </tbody>
          </table>
        </div> */}
      </div>
      {/* <Model
        show={modalShow}
        type={type}
        id={id}
        name={"packarma_testimonials"}
        onHide={() => setModalShow(false)}
      /> */}
    </AdminLayout>
  );
}

export default Index;
