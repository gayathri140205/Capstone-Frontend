

// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react'
import AxiosService from "../../utils/ApiService";
//import UserTaskDashboard from "./UserTaskDashboard";
// import UserDataChart from "./UserDataChart";
import Spinner from "../../Spiner/Spiner";

import styles from '../AdminDashboard/Dasboard.module.css'
const UserDashboard = () => {

    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch user data
            const userResponse = await AxiosService.get('/user/getdata');
            setUserData(userResponse.data);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    
      if (loading) {
        return <Spinner />;
      }

  return (
    <div
      className={`container-fluid ${styles.dashboard}`}
      style={{ overflowY: "auto", maxHeight: "calc(100vh )" }}
    >
 {/* <div className="col-xl-6 ">
          <div className={`card mb-4 bg-transparent ${styles.Donuts}`}>
            <div className="card-header">
             
            </div>
            <div className={`card-body ${styles.Donuts}`}>
              <UserDataChart />
            </div>
          </div>
        </div> */}

 <div className="row">
        <div className="col-xl-6">
          <div
            className={`card mb-4 bg-transparent text-white ${styles.chartCard}`}
          >
            <div className="card-header">
              <i className="fas fa-chart-area me-1"></i>
          <h1>Task Management App</h1>
            </div>
            <div className="card-body ">
           
           
            </div>
          </div>
        </div>

    </div>
    </div>
  )
}

export default UserDashboard