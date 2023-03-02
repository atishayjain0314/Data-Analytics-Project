import logo from './logo.svg';
import './App.css';
import {initializeApp} from "firebase/app";
import {getAnalytics,logEvent} from "firebase/analytics";
import {set,ref,getDatabase} from "firebase/database"


function App() {
  
  console.log("start");
  const firebaseConfig = {
    apiKey: "AIzaSyDMsSVXKTI3bLC301dtQPRPRgjVtKPeqsY",
    authDomain: "new-project-1c57b.firebaseapp.com",
    databaseURL: "https://new-project-1c57b-default-rtdb.firebaseio.com",
    projectId: "new-project-1c57b",
    storageBucket: "new-project-1c57b.appspot.com",
    messagingSenderId: "57868131013",
    appId: "1:57868131013:web:4cfe66ad67451ae00d2eac",
    measurementId: "G-7BT1K0E06X"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  function submitForm(e){
    e.preventDefault();
    var mail = getElementVal('mail');
    var fullname = {
        fname : getElementVal('fname'),
        lname : getElementVal('lname'), 
        
    }
    


// logEvent(analytics, 'select_content', {
//   content_type: getElementVal('fname'),
//   content_id: getElementVal('mail')
// });
// logEvent(analytics,'Information',{
//   webmail:getElementVal('mail')
// });
logEvent(analytics,'Full Name',{
  name: getElementVal('fname')+getElementVal('lname')
});
logEvent(analytics,'Email',{
  mail:getElementVal('mail')
});
    save(mail,fullname);
    console.log("working")
}

const save = (mail,fullname) =>{
  
  set(ref(database,'form'+getElementVal('mail')),{
      mail : mail,
      fullname : fullname,
  })
  
  
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}
console.log("end");
  return (
    <div>
        <form onSubmit={submitForm}>
            

            <div>
                <input  id="mail" placeholder="Your mail...." />
            </div>

            <div>
                <input  id="fname" placeholder="Your first name....." />
            </div>

            <div>
              <input  id="lname" placeholder="Your last name....." />
          </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  );
}

export default App;
