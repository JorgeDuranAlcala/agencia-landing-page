import type { 
	NextRequest,
	NextResponse
} from 'next/server'
import sendgrid from "@sendgrid/mail";


export async function GET(request: Request) {
	return new Response(
    JSON.stringify({
      name: 'Jim Halpert',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
      },
    }
  )
}


sendgrid.setApiKey(process.env["SENDGRID_API_KEY"] || "");
type ExtendedNextApiRequest = NextRequest & {
  body: {
    subject: string;
		message: string;
  };
}
export async function POST(req: NextRequest, res: NextResponse) {
	const reqJson = await req.json()
	try {
    // console.log("REQ.BODY", req.body);
		console.log(reqJson)
		const { subject, message, fullname  } = reqJson
    await sendgrid.send({
      to: "jorgeluis0621.duran@gmail.com", // Your email where you'll receive emails
      from: "jorgeluis21.duran@gmail.com", // your website email address here
      subject: `${subject}`,
      html: `<div> mensaje de <strong>${fullname}</strong> <br/> <p>${message}</p> </div>`,
    });
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 400   })
  }

	return new Response(JSON.stringify({ error: "" }))
  //return res.json({ error: "" });
}

