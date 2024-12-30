import AppointmentClient from "./AppointmentClient";

export const metadata = {
	title: "Randevu Al",
	description:
		"Online randevu sistemimiz ile kolayca veteriner randevunuzu oluşturun. Evcil dostlarınız için en uygun zamanda hizmet alın.",
};

export default function Appointment() {
	return <AppointmentClient />;
}
