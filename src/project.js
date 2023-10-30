
import React from 'react';
import { Col, Flex, Row } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import './projects.css';
import { PhoneOutlined } from '@ant-design/icons'
import { VideoCameraOutlined } from '@ant-design/icons'
import { MessageOutlined } from '@ant-design/icons'
import { UserSwitchOutlined } from '@ant-design/icons'
import { AudioMutedOutlined } from '@ant-design/icons'
import { UserOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import { SmileOutlined } from '@ant-design/icons'
import { SendOutlined } from '@ant-design/icons'
import { LinkOutlined } from '@ant-design/icons'
import { ImportOutlined } from '@ant-design/icons'


let Funpro = () => {
    let headerStyle = {

        color: '#fff',
        height: 80,
        marginLeft: 280,

        lineHeight: '64px',
        backgroundColor: '#181f2e',

    };
    let contentStyle = {


        lineHeight: '70px',
        color: 'black',
        backgroundColor: '#e2eef7',
    };
    let contsStyle = {
        height: 620,
        // marginLeft: 280,
        color: 'black',
        backgroundColor: '#ebf4fb',
    };
    let headStyle = {
        height: 620,
        marginLeft: 280,
        color: 'black',
        backgroundColor: '#181f2e',


    };
    let footStyle = {
        backgroundColor: 'white',



    };
    const justifyOptions = [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
    ];



    return (
        <><div style={{ backgroundColor: '#0e0e0e', }}>
            <Row style={{}}>
                <Col span={1} style={headerStyle} >  <img src="baby.jpg" style={{ height: "40px", width: "40px", borderRadius: "30px", marginTop: "20px", marginLeft: "10px" }} />

                </Col>
                <Col span={5} style={contentStyle} >   <Input size="large" placeholder="search" style={{ borderRadius: "50px", width: "250px", height: "30px", marginTop: "24px", marginLeft: "31pX" }} prefix={<SearchOutlined style={{ color: '#dde0e6', fontWeight: '10px' }} />} /></Col>
                <Col span={9} style={footStyle}><span style={{ marginLeft: "23px", fontSize: "20PX", fontWeight: 'bold', }} >Ter Nguyen</span><span style={{ marginLeft: "200px" }}><VideoCameraOutlined style={{ backgroundColor: '#dbdcdd', padding: '7px', borderRadius: "12px", marginLeft: "100px" }} /></span><span style={{ marginLeft: "70px" }}><PhoneOutlined style={{ backgroundColor: '#dbdcdd', padding: '7px', borderRadius: "12px" }} /></span><br /><ul><li style={{ color: "#00ff40" }}><span style={{ color: 'gray', fontSize: '11px' }}>Activ now</span></li></ul></Col>



            </Row>
            <Row>

                <Col span={1} style={headStyle} ><MessageOutlined style={{ color: "red", marginLeft: "20PX", fontSize: "19px", marginTop: "15px" }} /> <div><PhoneOutlined style={{ color: 'white', marginLeft: "19PX", fontSize: "19px", marginTop: "25px" }} /></div><div><UserSwitchOutlined style={{ color: 'white', marginLeft: "19PX", fontSize: "19px", marginTop: "25px" }} /></div><div><AudioMutedOutlined style={{ color: "white", marginLeft: "20PX", fontSize: "19px", marginTop: "25px" }} /></div>
                    <div style={{ color: 'white', marginLeft: '20px', fontSize: '18px', marginTop: '350px' }}><SettingOutlined /> </div>
                    7<div style={{ color: 'white', marginLeft: '20PX', fontSize: '17px', marginTop: '10PX' }}><ImportOutlined /></div>
                </Col>

                <Col span={5} style={contsStyle} >
                    <Flex className='justifyOptions' style={{ marginTop: '16px' }}>
                        <div style={{ marginLeft: '22px' }}>  <img src="a.jpg" style={{ height: "40px", width: "40px", borderRadius: "30px", marginLeft: "10px", marginTop: '10PX' }} /></div>
                        <div style={{ marginLeft: '5px', marginTop: '10px', fontWeight: 'bold' }}>Madonna Oster<br /><span style={{ fontSize: '10px' }}>Analysis of forieign experience..</span></div>
                        <div style={{ marginLeft: '50px', marginTop: '14px', fontSize: '10px' }}>1:10 PM</div>



                    </Flex>
                    <hr style={{ width: '270px', marginTop: '20px' }} />
                    <Flex className='justifyOptions' style={{ marginTop: '16px' }}>
                        <div style={{ marginLeft: '22px' }}>  <img src="b.jpg" style={{ height: "40px", width: "40px", borderRadius: "30px", marginLeft: "10px", marginTop: '10PX' }} /></div>
                        <div style={{ marginLeft: '5px', marginTop: '10px', fontWeight: 'bold' }}>Madonna Oster<br /><span style={{ fontSize: '10px' }}>Analysis of forieign experience..</span></div>
                        <div style={{ marginLeft: '50px', marginTop: '14px', fontSize: '10px' }}>1:10 PM</div>



                    </Flex>
                    <hr style={{ width: '270px', marginTop: '20px' }} />
                    <Flex className='justifyOptions' style={{ marginTop: '16px' }}>
                        <div style={{ marginLeft: '22px' }}>  <img src="c.jpg" style={{ height: "40px", width: "40px", borderRadius: "30px", marginLeft: "10px", marginTop: '10PX' }} /></div>
                        <div style={{ marginLeft: '5px', marginTop: '10px', fontWeight: 'bold' }}>Madonna Oster<br /><span style={{ fontSize: '10px' }}>Analysis of forieign experience..</span></div>
                        <div style={{ marginLeft: '50px', marginTop: '14px', fontSize: '10px' }}>1:10 PM</div>



                    </Flex>
                    <hr style={{ width: '270px', marginTop: '20px' }} />
                    <Flex className='justifyOptions' style={{ marginTop: '16px' }}>
                        <div style={{ marginLeft: '22px' }}>  <img src="d.jpg" style={{ height: "40px", width: "40px", borderRadius: "30px", marginLeft: "10px", marginTop: '10PX' }} /></div>
                        <div style={{ marginLeft: '5px', marginTop: '10px', fontWeight: 'bold' }}>Madonna Oster<br /><span style={{ fontSize: '10px' }}>Analysis of forieign experience..</span></div>
                        <div style={{ marginLeft: '50px', marginTop: '14px', fontSize: '10px' }}>1:10 PM</div>



                    </Flex>
                    <hr style={{ width: '270px', marginTop: '20px' }} />
                    <Flex className='justifyOptions' style={{ marginTop: '16px' }}>
                        <div style={{ marginLeft: '22px' }}>  <img src="e.jpg" style={{ height: "40px", width: "40px", borderRadius: "30px", marginLeft: "10px", marginTop: '10PX' }} /></div>
                        <div style={{ marginLeft: '5px', marginTop: '10px', fontWeight: 'bold' }}>Madonna Oster<br /><span style={{ fontSize: '10px' }}>Analysis of forieign experience..</span></div>
                        <div style={{ marginLeft: '50px', marginTop: '14px', fontSize: '10px' }}>1:10 PM</div>



                    </Flex>
                    <hr style={{ width: '270px', marginTop: '20px' }} />
                    <Flex className='justifyOptions' style={{ marginTop: '16px' }}>
                        <div style={{ marginLeft: '22px' }}>  <img src="f.jpg" style={{ height: "40px", width: "40px", borderRadius: "30px", marginLeft: "10px", marginTop: '10PX' }} /></div>
                        <div style={{ marginLeft: '5px', marginTop: '10px', fontWeight: 'bold' }}>Madonna Oster<br /><span style={{ fontSize: '10px' }}>Analysis of forieign experience..</span></div>
                        <div style={{ marginLeft: '50px', marginTop: '14px', fontSize: '10px' }}>1:10 PM</div>



                    </Flex>
                    <hr style={{ width: '270px', marginTop: '20px' }} />
                    <Flex className='justifyOptions' style={{ marginTop: '16px' }}>
                        <div style={{ marginLeft: '22px' }}>  <img src="b.jpg" style={{ height: "40px", width: "40px", borderRadius: "30px", marginLeft: "10px", marginTop: '10PX' }} /></div>
                        <div style={{ marginLeft: '5px', marginTop: '10px', fontWeight: 'bold' }}>Madonna Oster<br /><span style={{ fontSize: '10px' }}>Analysis of forieign experience..</span></div>
                        <div style={{ marginLeft: '50px', marginTop: '14px', fontSize: '10px' }}>1:10 PM</div>



                    </Flex>
                    <hr style={{ width: '270px', marginTop: '20px' }} />

                </Col>
                <Col span={9} style={{ backgroundColor: 'white' }}><span style={{ color: '#d7d7d7', marginLeft: "140px", fontSize: "12PX" }}>Yesterday 14:26 PM</span>
                    <Flex className='justifyOptions'>
                        <div>  <img src="h.jpg" style={{ height: "40px", width: "40px", borderRadius: "30px", marginLeft: "10px", marginTop: '10PX' }} /></div>
                        <div style={{ marginLeft: "20PX", height: "20px", width: "180px", borderRadius: "20PX", padding: "12PX", marginTop: '10px', backgroundColor: '#ebf4fb' }}> Hi Ken! How are you</div>


                    </Flex>
                    <div style={{ marginLeft: "300PX", height: "20px", width: "220px", borderRadius: "20PX", padding: "12PX", marginTop: '10px', color: 'white', backgroundColor: '#fa4c4c', padding: "12PX" }}> <span style={{ marginLeft: '24PX' }}>Yo!! <SmileOutlined /> I am find! What's Up? </span></div>
                    <Flex className='justifyOptions'>
                        <div>  <img src="i.jpg" style={{ height: "40px", width: "40px", borderRadius: "30px", marginLeft: "10px", marginTop: '10PX' }} /></div>
                        <div style={{ marginLeft: "20PX", height: "20px", width: "300px", borderRadius: "20PX", padding: "12PX", marginTop: '10px', backgroundColor: '#ebf4fb' }}> We need to discuss  Bliss's 2019 Company Trip</div>


                    </Flex>
                    <div style={{ marginLeft: "67PX", height: "20px", width: "300px", borderRadius: "20PX", padding: "12PX", marginTop: '10px', backgroundColor: '#ebf4fb' }}> Please let me know when you are available<UserOutlined /><UserOutlined /></div>
                    <div style={{ marginLeft: "270PX", height: "35px", width: "250px", borderRadius: "18PX", padding: "12PX", marginTop: '10px', color: 'white', backgroundColor: '#fa4c4c', padding: "13PX", fontSize: "12px" }}> <span style={{}}> Leorm ipsum dolor sit amer,consectetur adipiscing elit. Morboi fringilla,ante vel </span></div>
                    <Flex className='justifyOptions'>
                        <div>  <img src="j.jpg" style={{ height: "40px", width: "40px", borderRadius: "30px", marginLeft: "10px", marginTop: '10PX' }} /></div>
                        <div style={{ marginTop: '16PX' }}><img src='pro1.jpg' style={{ borderRadius: '20px', height: '160px', width: '240px', marginLeft: '20PX' }} /></div>


                    </Flex>
                    {/* <button className="btn" style={{ backgroundColor: '#dbdcdd' }}>...</button> */}
                    {/* <div style={{ fontSize: '60px', marginBottom: '10px' }}>.<span style={{ fontSize: '80px' }}>.</span>.</div> */}
                    <Flex className='justifyOptions' style={{ backgroundColor: '#ebf4fb', color: '#97a0ae', width: '40px', borderRadius: '20px', marginLeft: '70px', marginTop: '20PX', height: '20px' }}>
                        <div style={{ marginLeft: '13PX' }}>.</div>
                        <div style={{}}><span style={{ fontSize: '13PX', }}> .</span></div>
                        <div style={{}}>.</div>

                    </Flex>
                    <hr style={{ width: '520px', marginTop: '30px' }} />
                    <Flex className='justifyOptions' >
                        <div style={{ marginLeft: '30px', marginTop: '20PX' }}><SmileOutlined /></div>
                        <div style={{ marginLeft: '30px', marginTop: '20PX' }}>Your message here...</div>
                        <div style={{ marginLeft: '250px', marginTop: '18PX' }}><LinkOutlined style={{ backgroundColor: '#dbdcdd', padding: '7px', borderRadius: '12px' }} /></div>
                        <div style={{ marginLeft: '20px', marginTop: '16PX' }}><SendOutlined style={{ color: 'white', backgroundColor: '#fb4e4e', padding: '10px', borderRadius: '15px' }} /></div>

                    </Flex>
                </Col>





            </Row>
        </div >
        </>
    )

}
export default Funpro;

