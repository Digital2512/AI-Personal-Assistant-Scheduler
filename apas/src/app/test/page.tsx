import Link from "next/link";

export default async function Page() {
   
    return (
      <div>
          <div className="text-xl font-bold mb-4">TEST API PAGE</div>          

          <Link href='/apidefault'><button>To API Default Test</button></Link>
          <div></div>
          <Link href='/apiaxios'>To API Axios Test</Link>
          
      </div>
    );
  }