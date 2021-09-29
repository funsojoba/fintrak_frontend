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
import ErrorMsg from "../../components/typography/errorMsg"
import { Container, Content, BodyDiv, ProfileImage, ProfileForm, FormContent, ProfileImgContainer, ChildDiv, InputSelect, DisplayInfo } from "./style";
import { currency } from "../../components/currency";
import { ToastContainer } from 'react-toastify';

import fetchUser from "../../redux/action/user"
import addUserProfile from '../../redux/action/user/createProfile'
import addAvatar from "../../redux/action/user/addAvatar"
import changePassword from "../../redux/action/user/changePassword";
import deleteUser from "../../redux/action/user/deleteUser";

import { Formik } from "formik";
import { connect } from 'react-redux'
import { useState, useEffect } from "react";
import { validatePassword } from './validate'


const SettingsPage = ({ fetchUser, userData, addUserProfile, addProfileData, addAvatar, avatarData, changePassword, changePasswrodData, deleteUser, deleteUserData }) => {
    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    const [modalState, setModalState] = useState(false)
    const openModal = () => {
        setModalState(true)
    }
    const closeModal = () => {
        setModalState(false)
    }

    const [profileModal, setProfileModal] = useState(false)
    const openProfileModal = () => {
        setProfileModal(true)
    }
    const closeProfileModal = () => {
        setProfileModal(false)
    }
    return <Container>
        <ToastContainer />
        {/* DELETE ACCOUNT MODAL */}
        <Modal
            close={closeModal}
            display={modalState ? 'flex' : 'none'}
        >
            <Paragraph color="#AF0000" >Are you sure you want to delete your <br/> account, note that you can't reverse this action</Paragraph>
            <br />
            <div>
                <Button onClick={closeModal}>Cancle</Button> &nbsp;
                <Button onClick={()=>deleteUser()} background="#AF0000" color="#fff">Delete Account</Button>
            </div>
        </Modal>

        {/* UPLOAD AVATAR MODAL */}
        <Modal
            close={closeProfileModal}
            display={profileModal ? 'flex' : 'none'}
        >
            <Paragraph>Select an image file</Paragraph>
            <br />
            <Formik
                initialValues = {{avatar:""}}
                onSubmit={async (values)=>{
                    let data = new FormData()
                    const imageInput = document.querySelector("#avatar")
                    data.append('avatar', imageInput.files[0])
                    console.log(data)
                    await addAvatar(data)
                }}
            >
                {({handleSubmit, handleBlur, handleChange, values, touched})=>(
                <form onSubmit={handleSubmit}>
                    <Input 
                        type="file" 
                        name="avatar" 
                        id="avatar"
                        value={values.avatar}
                        onChange={handleChange}
                        onBlur={handleBlur} /> &nbsp;
                        <Button type="submit" >
                            {avatarData.loading ? <Loader color="#fff" /> : (<i className="fas fa-cloud-upload-alt"></i>)}
                        </Button>
                </form>
                )}
            </Formik>
        </Modal>

        {/* SIDE BAR */}
        <SideBar />

        {/* MAIN CONTENT */}
        <Content>
            <DashNav>
                Settings
                <DashImage />
            </DashNav>

            <BodyDiv>
                <ChildDiv>
                    <Box margin="10px">
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
                            {userData.data.user.first_name && <DisplayInfo><i className="fas fa-user"></i> {userData.data &&userData.data.user.first_name} </DisplayInfo>}
                            {userData.data.user.last_name && <DisplayInfo><i className="far fa-user"></i> {userData.data && userData.data.user.last_name} </DisplayInfo>}
                            {userData.data.user.email && <DisplayInfo><i className="fas fa-envelope"></i> {userData.data &&userData.data.user.email} </DisplayInfo>}
                            {userData.data.profile.phone && <DisplayInfo><i className="fas fa-phone-square-alt"></i> {userData.data && userData.data.profile.phone} </DisplayInfo>}
                            {userData.data.profile.address && <DisplayInfo><i className="fas fa-map-marker-alt"></i> {userData.data && userData.data.profile.address} </DisplayInfo>}
                            {userData.data.profile.date_of_birth && <DisplayInfo><i className="fas fa-calendar-alt"></i> {userData.data && userData.data.profile.date_of_birth} </DisplayInfo>}
                            {userData.data.profile.prefered_currency && <DisplayInfo><i className="fas fa-money-bill-alt"></i> {userData.data && userData.data.profile.prefered_currency} </DisplayInfo>}
                        </ProfileForm>
                    </Box>

                    <Box margin="10px">
                        <H5 align="center">Change Password</H5>
                        <Formik
                            initialValues={{
                                current_password: "",
                                new_password: ""
                            }}
                            validationSchema={validatePassword}
                            onSubmit={async (values)=>{
                                await changePassword(values)
                            }}
                        >{({ handleSubmit, handleBlur, handleChange, touched, errors, values }) => (
                            <ProfileForm onSubmit={handleSubmit}>
                                <FormContent>
                                    <Label>Current Password</Label>
                                    <Input
                                        id="password"
                                        width="100%"
                                        type="password"
                                        name="current_password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.current_password}
                                    />
                                    <ErrorMsg>{touched.current_password && errors.current_password ? errors.current_password : null}</ErrorMsg>
                                </FormContent>
                                <FormContent>
                                    <Label>New Password</Label>
                                    <Input
                                        width="100%"
                                        name="new_password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.new_password}
                                        type="password" />
                                    <ErrorMsg>{touched.new_password && errors.new_password ? errors.new_password : null}</ErrorMsg>
                                </FormContent>

                                    <Button type="sumit">{changePasswrodData.loading ? <Loader color="#fff"/> : 'Change Password'}</Button>
                            </ProfileForm>
                        )}
                        </Formik>
                    </Box>


                </ChildDiv>

                <ChildDiv>
                    <Box margin="10px">
                        <Formik
                            initialValues={{
                                phone: '',
                                address: '',
                                date_of_birth: '',
                                prefered_currency: ''
                            }}
                            onSubmit={async (values) => addUserProfile(values)}
                        >{({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
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
                                        {currency.map(item => {
                                            return <option value={item.symbol}>{item.name} - {item.symbol}</option>
                                        })}
                                    </InputSelect>
                                </FormContent>
                                <Button type="submit">{addProfileData.loading ? <Loader color="#fff" /> : 'Update'}</Button>
                            </ProfileForm>
                        )}</Formik>
                    </Box>
                    
                    <Box margin="10px">
                        <H5 color="#AF0000" align="center">Danger Zone</H5>
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
            </BodyDiv>

        </Content>
    </Container>
}

const mapStateToProps = store => ({
    userData: store.userReducer,
    addProfileData: store.userProfileReducer,
    avatarData : store.addAvatarReducer,
    changePasswrodData: store.changePasswordReducer,
    deleteUserData: store.deleteUserReducer
})

export default connect(mapStateToProps, { fetchUser, addUserProfile, addAvatar, changePassword, deleteUser })(SettingsPage)