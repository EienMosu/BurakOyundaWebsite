import React from "react";
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

const Contact = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Title>
              BURAK OYUNDA <br /> İŞ BİRLİKLERİ İÇİN
            </Title>
            <Span>burakoyunda@gmail.com</Span>
          </Left>
          <Right>
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
