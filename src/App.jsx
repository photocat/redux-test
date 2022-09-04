import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Row, Col, Card, Divider, Input } from "antd";
import { UserOutlined, SkinOutlined, MailOutlined, EditOutlined } from '@ant-design/icons';
import './App.css'
import Logo from './assets/redux.svg';
import { editName, editSurname, editAge, editEmail } from './store/actions/userActions';

const { Header, Content, Footer } = Layout;

function App() {
    const [isEditing, setIsEditing] = useState(false);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
      <Layout>
          <Header className='header'>
              <Row gutter={10}>
                    <Col xs={2} md={2} lg={1}>
                        <img src={Logo} alt='logo' className='logo'/>
                    </Col>
                    <Col xs={22} md={22} lg={23}>
                        <h1>Redux Test Project</h1>
                    </Col>
              </Row>
          </Header>
          <Content className='content'>
              <Row justify={'center'}>
                  <Divider className={'divider'} orientation='center'>User info</Divider>
                  <Col xs={22} md={18} lg={6}>
                      <Card
                          title='User Card'
                          bordered={true}
                          extra={
                              <EditOutlined onClick={()=> setIsEditing(!isEditing)}/>
                          }
                      >
                          <div className={'card-row'}>
                              <UserOutlined />
                              <p className={'label'}>Name:</p>
                              { isEditing
                                  ? <Input
                                      value={user.name}
                                      type={'text'}
                                      onChange={(e) => dispatch(editName(e.target.value))}
                                      onPressEnter={() => setIsEditing(!isEditing)}
                                    />
                                  : <p>{user.name || 'Name is empty'}</p>
                              }
                          </div>
                          <div className={'card-row'}>
                              <UserOutlined />
                              <p className={'label'}>Surname:</p>
                              { isEditing
                                  ? <Input
                                      value={user.surname}
                                      type={'text'}
                                      onChange={(e) => dispatch(editSurname(e.target.value))}
                                      onPressEnter={() => setIsEditing(!isEditing)}
                                    />
                                  : <p>{user.surname || 'Surname is empty'}</p>
                              }
                          </div>
                          <div className={'card-row'}>
                              <SkinOutlined />
                              <p className={'label'}>Age:</p>
                              { isEditing
                                  ? <Input
                                      value={user.age}
                                      type={'number'}
                                      onChange={(e) => dispatch(editAge(e.target.value))}
                                      onPressEnter={() => setIsEditing(!isEditing)}
                                    />
                                    : <p>{user.age}</p>}
                          </div>
                          <div className={'card-row'}>
                              <MailOutlined />
                              <p className={'label'}>Email:</p>
                              {isEditing
                                  ? <Input
                                      value={user.email}
                                      type={'email'}
                                      onChange={(e) => dispatch(editEmail(e.target.value))}
                                      onPressEnter={() => setIsEditing(!isEditing)}
                                  />
                                  : <p>{user.email || 'Email is empty'}</p>
                              }
                          </div>
                      </Card>
                  </Col>
              </Row>
          </Content>
          <Footer className='footer'>Redux Test Project™</Footer>
      </Layout>
    );
}

export default App
