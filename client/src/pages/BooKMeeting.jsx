/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function BookMeeting() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"insus-infratech-client-meeting"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <button data-cal-namespace="insus-infratech-client-meeting"
    data-cal-link="shubham-sinha-xxiobo/insus-infratech-client-meeting"
    
    data-cal-config='{"layout":"month_view"}'
  >Click me</button>;
};
  