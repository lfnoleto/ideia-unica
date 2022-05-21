import React from 'react'
import { Container, Content } from '../../../styles/styles'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../src/components/ItemContact/index'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://br.linkedin.com/in/lucas-ferreira-noleto-a67558169" 
        />
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="https://www.facebook.com/lucasnoleto" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/lfnoleto" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="lucas.noleto@lucasnoleto.com.br" 
        />
      </Content>
    </Container>
  )
}