import React, { useEffect } from "react";
import {
  Container,
  Form,
  Input,
  Left,
  LeftForm,
  Right,
  RightForm,
  SendButton,
  Span,
  Textarea,
  Title,
  Wrapper,
} from "./Contact.styles";
//Animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: -600 });
  }, []);

  return (
    <>
      <Container id="contact">
        <Wrapper>
          <Left data-aos="fade-down-right">
            <Title>
              BURAK OYUNDA <br /> İŞ BİRLİKLERİ İÇİN
            </Title>
            <Span>burakoyunda@gmail.com</Span>
          </Left>
          <Right data-aos="fade-down-left">
            <Form>
              <LeftForm>
                <Input placeholder="Isim" />
                <Input placeholder="Email" />
                <Input placeholder="Konu" />
              </LeftForm>
              <RightForm>
                <Textarea placeholder="Mesajiniz" />
                <SendButton><span>Gonder</span></SendButton>
              </RightForm>
            </Form>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Contact;
