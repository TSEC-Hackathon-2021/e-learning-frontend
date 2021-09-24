import React from 'react'
import { useToasts } from 'react-toast-notifications';
import Navbar from '../../landingPage/Navbar'
import Input from '../input'
import Course from '../course/index'

import './style.css'

function Main() {

    const { addToast } = useToasts();

    const [edit,setEdit] = React.useState(true);


    let dataValuses = {
        id:"123",
        name:'Manish Jha',
        email:'manishjha5410@gmail.com',
        profession:'Maker',
        github:'ser',
        linkedin:'sder',
        payment:123
    }

    let makeEdit = (target) => {
        setEdit(!edit);
        for(var data in dataValuses) dataValuses[data]='';
        addToast('Now you can successfully edit', { appearance: 'success', autoDismiss: true });
    }

    let saveEdit = () => {
        addToast('Data saved successfully', { appearance: 'success', autoDismiss: true });
    }

    React.useEffect(()=>{
        console.log(edit);
    },[edit])

    return (
        <>
            <Navbar />
            <div class="container emp-profile">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                        </div>
                    </div>
                    <div class="col-md-6" style={{paddingTop: "1.2rem",paddingBottom: "1rem"}}>
                        <div class="profile-head">
                            <h5>
                                Ananomyusan
                            </h5>
                            <h6>
                                Web Developer and Designer
                            </h6>
                            <p class="proile-rating"><span>Title</span></p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" onClick={()=>makeEdit()}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <ul class="nav" id="opt-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Links</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="photo-tab" data-toggle="tab" href="#photo" role="tab" aria-controls="profile" aria-selected="false">Photo</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="payment-tab" data-toggle="tab" href="#payment" role="tab" aria-controls="profile" aria-selected="false">Payment</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="course-tab" data-toggle="tab" href="#course" role="tab" aria-controls="course" aria-selected="false">Course</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="tab-pane--tit">About</h3>
                                <Input name="Name" placeholder={dataValuses.name} type="text" disabled={edit}/>
                                <Input name="Email" placeholder={dataValuses.email} type="email" disabled={edit}/>
                                <Input name="Profession" placeholder={dataValuses.profession} type="text" disabled={edit}/>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3 className="tab-pane--tit">Links</h3>
                                <Input name="Github" placeholder="Github" type="text" disabled={edit}/>
                                <Input name="Linkedin" placeholder="Linkedin" type="text" disabled={edit}/>
                            </div>
                            <div class="tab-pane fade" id="photo" role="tabpanel" aria-labelledby="photo-tab">
                                <h3 className="tab-pane--tit">Photo</h3>
                                <Input name="Photo" placeholder="Photo" type="file" disabled={edit}/>
                            </div>
                            <div class="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                                <h3 className="tab-pane--tit">Payment</h3>
                                <Input name="Payment" placeholder="Payment" type="number" disabled={edit}/>
                            </div>
                            <div class="tab-pane fade" id="course" role="tabpanel" aria-labelledby="course-tab">
                                <h3 className="tab-pane--tit">Course</h3>
                                <Course />
                            </div>
                            <button class="btn btn-primary col-sm-2" id="sbn--btn" type="submit" onClick={()=>saveEdit()}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main

//https://codepen.io/GeoffreyCrofte/pen/OJMaMxa