
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    const { name, email, message } = req.body;

    const content = {
        to: "albinjo12345alex@gmail.com",
        from: "namaste@packult.com",
        subject: "New Message from Contact Form",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
    };

    try {
        await sgMail.send(content);
        console.log(sgMail);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.log(error);
        console.log(error.response.body);
        console.log(process.env.SENDGRID_API_KEY);
        res.status(400).json({ message: "Email not sent" });
    }

}
