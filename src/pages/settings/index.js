import SideBar from "../../components/sideBar";
import DashNav from "../../components/dashNav";
import DashImage from "../../components/dashNav/dashImage";
import Box from "../../components/box";
import Input from "../../components/input";
import Label from "../../components/typography/label";
import Button from "../../components/button"
import H5 from "../../components/typography/h5"

import Modal from "../../components/modal";
import { Container, Content, BodyDiv, ProfileImage, ProfileForm, FormContent, ProfileImgContainer, ChildDiv } from "./style";
import Paragraph from "../../components/typography/p";

import { currency } from "../../components/currency";

import fetchUser from "../../redux/action/user"
import {connect} from 'react-redux'
import { useState, useEffect } from "react";

const SettingsPage = ({ fetchUser, userData})=>{
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
            <Paragraph color="#AF0000" >Are you sure you want to delete your account, note that you can't reverse this action</Paragraph>
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
                            <FormContent>
                                <Input value={userData.data && userData.data.user.first_name} readonly width="100%" />
                            </FormContent>
                            <FormContent>
                                <Input value={userData.data && userData.data.user.last_name} readonly width="100%" />
                            </FormContent>
                            <FormContent>
                                <Input value={userData.data && userData.data.user.email} readonly width="100%" />
                            </FormContent>
                        </ProfileForm>
                    </Box>
                    <Box  margin="10px">
                        <ProfileForm>
                            <FormContent>
                                <Label>Phone</Label>
                                <Input placeholder="+1 2334 123" type="tel" width="100%"/>
                            </FormContent>
                            <FormContent>
                                <Label>Date of birth</Label>
                                <Input width="100%" type="date"/>
                            </FormContent>
                            <FormContent>
                                <Label>Address</Label>
                                <Input placeholder="7. Wisconson Street, Houston, Texas" type="text" width="100%" />
                            </FormContent>
                            <Button>Update</Button>
                        </ProfileForm>
                    </Box>
                </ChildDiv>
                <ChildDiv>
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
                    <Box margin="10px">
                        <H5>Prefered Currency</H5>
                        <ProfileForm>
                            <FormContent>
                                <select >
                                    {currency.map(item =>{
                                        return <option value={item.symbol}>{item.cc} - {item.name} - {item.symbol}</option>
                                    })}
                                </select>
                            </FormContent>
                            
                            <Button>Update</Button>
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
            </BodyDiv>

        </Content>
    </Container>
}

const mapStateToProps = store => ({
    userData: store.userReducer
})

export default connect(mapStateToProps, { fetchUser})(SettingsPage)