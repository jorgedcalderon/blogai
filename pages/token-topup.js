import {withPageAuthRequired} from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/Applayout";


export default function TokenTopup() {
    
  const handleClick = async () => {
      await fetch(`/api/addTokens`, 
      { 
        method: 'POST',
      });
    }

    return (
      <div>
        <h1>Recarga tus token, pagina topup</h1>
        <button className="btn" onClick={handleClick}>
        Añade tokens
        </button>
      </div>
    );
  }
  
  TokenTopup.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}>{page}</AppLayout>
  };

  export const getServerSideProps = withPageAuthRequired( () => {
    return {
      props: {
      },
    };
  });