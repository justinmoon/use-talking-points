import IframeResizer from "iframe-resizer-react";

export default function Home() {
  return (
    <div>
      {/* <iframe src="https://talkingpoints.vercel.app/embed/SITE_ID/ROUTE" /> */}
      <IframeResizer
        checkOrigin={false}
        title="Comments"
        // prod
        // src={`https://talkingpoints.vercel.app/embed/SITE_ID`}
        src={`http://localhost:3333/embed/pRWiC8qH2bhfZytZmnlm`}
        style={{
          width: "1px",
          minWidth: "100%",
        }}
      />
    </div>
  );
}
