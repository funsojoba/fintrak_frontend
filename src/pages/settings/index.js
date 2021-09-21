import SideBar from "../../components/sideBar";
import DashNav from "../../components/dashNav";
import DashImage from "../../components/dashNav/dashImage";
import Box from "../../components/box";
import Input from "../../components/input";
import Label from "../../components/typography/label";
import Button from "../../components/button"
import H5 from "../../components/typography/h5"
import Modal from "../../components/modal";
import Paragraph from "../../components/typography/p";

import Loader from "react-spinners/SyncLoader";
import { Container, Content, BodyDiv, ProfileImage, ProfileForm, FormContent, ProfileImgContainer, ChildDiv, InputSelect, DisplayInfo } from "./style";

import { currency } from "../../components/currency";

import { Formik } from "formik";
import fetchUser from "../../redux/action/user"
import addUserProfile from '../../redux/action/user/createProfile'
import {connect} from 'react-redux'
import { useState, useEffect } from "react";


const SettingsPage = ({ fetchUser, userData, addUserProfile, addProfileData})=>{
    console.log(userData)
    useEffect(() => {
        fetchUser()
    }, [fetchUser])
    const [modalState, setModalState] = useState(false)
    const openModal = ()=>{
        setModalState(true)
    }
    const closeModal = ()=>{
        setModalState(false)
    }

    const [profileModal, setProfileModal] = useState(false)
    const openProfileModal = ()=>{
        setProfileModal(true)
    }
    const closeProfileModal = ()=>{
        setProfileModal(false)
    }
    return <Container>
        <Modal
            close={closeModal}
            display={modalState ? 'flex' : 'none'}
        >
            <Paragraph color="#AF0000" >Are you sure you want to delete your account,<br/> note that you can't reverse this action</Paragraph>
            <br/>
            <div>
            <Button onClick={closeModal}>Cancle</Button> &nbsp;
            <Button background="#AF0000" color="#fff">Delete Account</Button>
            </div>
        </Modal>
       
        <Modal
            close={closeProfileModal}
            display={profileModal ? 'flex' : 'none'}
        >
            <Paragraph>Select an image file</Paragraph>
            <br/>
            <form>
            <Input type="file" name="profile_image"/> &nbsp;
                <Button><i className="fas fa-cloud-upload-alt"></i> &nbsp; Upload</Button>
            </form>
        </Modal>


        <SideBar />
        <Content>
            <DashNav>
                Settings
                <DashImage />
            </DashNav>

            <BodyDiv>
                <ChildDiv>
                    <Box  margin="10px">
                        <ProfileImgContainer>
                            <ProfileImage background={userData.data && userData.data.user.avatar} />
                            <Button
                                onClick={openProfileModal}
                                background="#fff"
                                color="#858585"
                                border="solid 2px #858585"
                                padding="5px 10px"
                            >Change</Button>
                        </ProfileImgContainer>
                        <ProfileForm>
                            {userData.data.user.first_name && <DisplayInfo>{userData.data && userData.data.user.first_name} </DisplayInfo>}
                            {userData.data.user.last_name && <DisplayInfo>{userData.data && userData.data.user.last_name} </DisplayInfo>}
                            {userData.data.user.email && <DisplayInfo>{userData.data && userData.data.user.email} </DisplayInfo>}
                            {userData.data.profile.phone && <DisplayInfo>{userData.data && userData.data.profile.phone} </DisplayInfo>}
                            {userData.data.profile.address && <DisplayInfo>{userData.data && userData.data.profile.address} </DisplayInfo>}
                            {userData.data.profile.date_of_birth && <DisplayInfo>{userData.data && userData.data.profile.date_of_birth} </DisplayInfo>}
                            {userData.data.profile.prefered_currency && <DisplayInfo>{userData.data && userData.data.profile.prefered_currency} </DisplayInfo>}
                        </ProfileForm>
                    </Box>
                    <Box margin="10px">
                        <H5 color="#AF0000">Danger Zone</H5>
                        <br />
                        <>
                            <Button
                                onClick={openModal}
                                background="#fff"
                                color="#AF0000"
                                border="solid 1px #AF0000"
                                width="100%"
                            ><i className="fas fa-trash"></i> &nbsp;Delete my account</Button>
                        </>
                    </Box>
                </ChildDiv>
                <ChildDiv>
                    <Box  margin="10px">
                        <Formik
                            initialValues={{
                                phone:'',
                                address:'',
                                date_of_birth:'',
                                prefered_currency:''
                            }}
                            onSubmit={async (values)=> addUserProfile(values)}
                        >{({handleSubmit, handleBlur, handleChange, values, errors, touched})=>(
                            <ProfileForm onSubmit={handleSubmit}>
                                <FormContent>
                                    <Label>Phone</Label>
                                    <Input 
                                        placeholder="+1 2334 123" 
                                        type="tel" 
                                        width="100%"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        name="phone"
                                        />
                                </FormContent>
                                <FormContent>
                                    <Label>Date of birth</Label>
                                    <Input 
                                        width="100%" 
                                        type="date"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="date_of_birth"
                                        value={values.date_of_birth}
                                        />
                                </FormContent>
                                <FormContent>
                                    <Label>Address</Label>
                                    <Input 
                                        placeholder="7. Wisconson Street, Houston, Texas" 
                                        type="text" width="100%"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="address"
                                        value={values.address} />
                                </FormContent>
                                <FormContent>
                                    <Label>Prefered Currency</Label>
                                    <InputSelect width='100%'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.prefered_currency}
                                            name="prefered_currency"
                                     >
                                        {currency.map(item =>{
                                            return <option value={item.symbol}>{item.name} - {item.symbol}</option>
                                        })}
                                    </InputSelect>
                                </FormContent>
                                <Button type="submit">{addProfileData.loading ? <Loader color="#fff" /> : 'Update'}</Button>
                            </ProfileForm>
                        )}</Formik>
                    </Box>
                    <Box margin="10px">
                        <H5>Reset Password</H5>
                        <ProfileForm>
                            <FormContent>
                                <Label>Current Password</Label>
                                <Input width="100%" type="password" />
                            </FormContent>
                            <FormContent>
                                <Label>New Password</Label>
                                <Input width="100%" type="password" />
                            </FormContent>
                            
                            <Button>Update</Button>
                        </ProfileForm>
                    </Box>
                    
                </ChildDiv>
            </BodyDiv>

        </Content>
    </Container>
}

const mapStateToProps = store => ({
    userData: store.userReducer,
    addProfileData: store.userProfileReducer
})

export default connect(mapStateToProps, { fetchUser, addUserProfile})(SettingsPage)