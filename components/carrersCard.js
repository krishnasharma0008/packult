import React from "react";
import styles from "../styles/components/carrersCard.module.scss";
import { uploadImage } from "../utils/firebase_image_upload";
import { uploadData } from "../utils/firebase_data_handler";
import { queryClient } from "../pages/_app";
import { Pane, Dialog, Button, TextInput } from 'evergreen-ui'

function CarrersCard(props) {
  const { id, title, workHours, exp, location } = props;
  const [isShown, setIsShown] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const handleSubmitImage = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const doc = e.target[3].files[0];

    console.log(name, email, phone, doc);

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // months start at 0, so add 1 to get the current month
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

    const resp = uploadImage(doc, `Test`);
    resp.then((res) => {
      if (res.message === "success") {
        const data = {
          name: name,
          date: currentDateTime,
          email: email,
          phone: phone,
          doc: res.data,
        };
        uploadData(data, `careers/${id}/applicants`).then((res) => {
          if (res.message === "success") {
            alert("Data Uploaded");
            queryClient.invalidateQueries("careers");
            setIsLoading(false);
            setIsShown(false);
          } else {
            alert("Data Upload Failed.");
            console.log(res.data);
            setIsLoading(false);
            setIsShown(false);
          }
        });
      } else {
        alert("Image Upload Failed.");
        setIsLoading(false);
        setIsShown(false)
      }
    });
  };

  return (
    <div className={styles.carrers_card}>
      <div className={styles.card_heading}>
        <h2>{title}</h2>
        <button onClick={() => setIsShown(true)} >
          Apply
        </button>
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_content_buttons}>
          <button>{location} </button>
          <button>{exp} + Years </button>
          <button>{workHours}</button>
        </div>
      </div>
      <hr />

      <Pane>
        <Dialog
          isShown={isShown}
          title="Show your interest in Packult"
          onCloseComplete={() => setIsShown(false)}
          confirmLabel="Submit"
          hasFooter={false}
        >
          <form onSubmit={handleSubmitImage}>
            <input style={{
              width: "90%",
              height: "20px",
              backgroundColor: "#f5f5f5",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "2% 5%",
              borderRadius: "5px",
              marginBottom: "10px"
            }} type="text" placeholder="Full Name" />
            <input style={{
              width: "90%",
              height: "20px",
              backgroundColor: "#f5f5f5",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "2% 5%",
              borderRadius: "5px",
              marginBottom: "10px"
            }} type="email" placeholder="Email" />
            <input style={{
              width: "90%",
              height: "20px",
              backgroundColor: "#f5f5f5",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "2% 5%",
              borderRadius: "5px",
              marginBottom: "10px"
            }} type="number" placeholder="Phone Number" />
            <label for="image">
              <span style={{
                width: "90%",
                height: "20px",
                backgroundColor: "#f5f5f5",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2% 5%",
                borderRadius: "5px",
                marginBottom: "30px"
              }}>Resume</span>
            </label>
            <input id="image" style={{
              display: "none"
            }} type="file" accept=" application/pdf,application/vnd.ms-excel" placeholder="Text input placeholder..." />

            <button style={{
              width: "100%",
              height: "50px",
              // light green
              backgroundColor: "#8bc34a",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2% 5%",
              borderRadius: "5px",
              border: "none",
              marginBottom: "10px"
            }} type="submit">
              {
                isLoading ? "Uploading..." : "Submit"
              }
            </button>
          </form>
        </Dialog>

      </Pane>
    </div>
  );
}

export default CarrersCard;
