import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	const data = await request.json();

	try {
		await resend.emails.send({
			from: "randevu@kiymetveteriner.com",
			to: "info@kiymetveteriner.com",
			subject: "Yeni Randevu Talebi",
			text: `
        İsim: ${data.name}
        Telefon: ${data.phone}
        Tarih: ${data.date}
        Not: ${data.notes}
      `,
		});

		return Response.json({ success: true });
	} catch (error) {
		return Response.json({ error: "Randevu oluşturulamadı" }, { status: 500 });
	}
}
