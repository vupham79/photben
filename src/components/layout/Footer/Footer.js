import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { FacebookBox, Email, MapMarker } from 'mdi-material-ui';

const Wrapper = styled.div`
    margin-top: 20px;
    text-align: left;
`;

const FooterTop = styled.div`
  color: #FFF;
  padding: 40px 0;
  background-color: #263238;
`;

const Container = styled.div`
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
`;

const ContentWrapper = styled.div`
  color: #FFF;
  display: flex;
  flex-direction: column;
`;

const ContentTitle = styled.h3`
  color: #fff;
  margin-bottom: 8px;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.5em;
`;

const FooterBottom = styled.div`
  padding: 16px 0;
  background-color: #262e33;
`;

const ContentItem = styled.a`
  color: #9e9e9e;
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 0.775rem;
  font-weight: 400;
  text-decoration: none;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.46429em;
  svg {
    font-size: 0.8rem;
    margin-right: 8px;
  }
`;

const Copyright = styled.aside`
  color: #FFFFFF;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.71429em;
`;

const BottomCaption = styled.p`
  color: #bdbdbd;
  margin-top: 0px;
  font-size: 0.70rem;
  font-weight: 400;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  margin-bottom: 0px;
`;

const Footer = () => (
    <Wrapper>
        <FooterTop>
            <Container>
                <Grid container spacing={24}>
                    <Grid item md={4} sm={6} xs={12}>
                        <ContentWrapper>
                            <ContentTitle>HỖ TRỢ KHÁCH HÀNG</ContentTitle>
                            <ContentTitle style={{ fontSize: '1rem' }}>Hotline: 097 6262 8181</ContentTitle>
                            <ContentItem href='#'>Hướng dẫn đặt hàng</ContentItem>
                            <ContentItem href='#'>Quy định thanh toán</ContentItem>
                            <ContentItem href='#'>Chính sách vận chuyển</ContentItem>
                            <ContentItem href='#'>Chính sách đổi - trả hàng</ContentItem>
                        </ContentWrapper>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <ContentWrapper>
                            <ContentTitle>VỀ PHOTBEN</ContentTitle>
                            <ContentItem href='#'>Giới thiệu về PHOTBEN</ContentItem>
                            <ContentItem href='#'>Chính sách bảo mật</ContentItem>
                            <ContentItem href='#'>Điều khoản sử dụng</ContentItem>
                        </ContentWrapper>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <ContentWrapper>
                            <ContentTitle>KẾT NỐI VỚI CHÚNG TÔI</ContentTitle>
                            <ContentItem href='#'>
                                <Email />
                                lienhe@photben.vn
                            </ContentItem>
                            <ContentItem href='#'>
                                <FacebookBox />
                                PHOTBEN
                            </ContentItem>
                            <ContentItem href='#'>
                                <MapMarker />
                                234 Lê Văn Khương, P10, Q12, TP. HCM
                            </ContentItem>
                        </ContentWrapper>
                    </Grid>
                </Grid>
            </Container>
        </FooterTop>
        <FooterBottom>
            <Container style={{ flexDirection: 'column' }}>
                <Copyright>© 2018 – Bản quyền thuộc Công Ty CP Photben</Copyright>
                <BottomCaption>Website đang trong quá trình thử nghiệm chờ cấp phép của Bộ Công thương.</BottomCaption>
                <BottomCaption>Thiết kế bởi Innoteq Vietnam.</BottomCaption>
            </Container>
        </FooterBottom>
    </Wrapper>
);

export default Footer;
