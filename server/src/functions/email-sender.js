import sgMail from "@sendgrid/mail";
import { SENDGRID_API, HOST_EMAIL } from "../constants";

const sendMail = async (email, subject, text, html) => {
	sgMail.setApiKey(SENDGRID_API);
	try {
		const msg = {
			html,
			text,
			subject,
			to: email,
			from: HOST_EMAIL,
		};
		console.log(msg);
		await sgMail.send(msg);
		console.log("MAIL_SENT");
	} catch (err) {
		console.log("ERROR_MAILING", err.message);
	} finally {
		return;
	}
};

export default sendMail;
