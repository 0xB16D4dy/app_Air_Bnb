import { Button } from "antd"
import styled from "styled-components"
export const LeftSideContainer = styled.div`
padding: 24px;
border-radius: 12px;
border: 1px solid rgb(221, 221, 221);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const AvatarUpload = styled.div`
margin-bottom: 32px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 10px;
`

export const Container = styled.div`
width: 100%
`

export const GetAchievement = styled(Button)`
border-radius: 8px;
border-color: #222;
padding: 13px 23px;
height: auto;
font-size: 16px;
font-weight: 800;
&.ant-btn:hover {
  background-color: #f7f7f7;
  color: #222;
  border-color: #222;
}
`