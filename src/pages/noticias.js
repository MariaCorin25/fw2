import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
export default function noticias() {
  var produtos = [
    [
      {
          id: 1,
          produto: "Camiseta Estampada",
          descricao: "Camiseta de algodão com estampa exclusiva, ideal para o dia a dia e confortável para qualquer ocasião."
      },
      {
          id: 2,
          produto: "Tênis Esportivo",
          descricao: "Tênis leve e respirável, projetado para proporcionar conforto e performance durante atividades físicas intensas."
      },
      {
          id: 3,
          produto: "Relógio Analógico",
          descricao: "Relógio elegante com design sofisticado, perfeito para compor looks formais e informais com muito estilo."
      },
      {
          id: 4,
          produto: "Mochila Backpack",
          descricao: "Mochila resistente com múltiplos compartimentos, ideal para estudantes e profissionais que precisam de organização no dia a dia."
      },
      {
          id: 5,
          produto: "Fone de Ouvido Sem Fio",
          descricao: "Fone de ouvido com tecnologia Bluetooth, oferece qualidade de som superior e conforto para longas horas de uso."
      }
  ]
  
  ]
  return (
    <>
      <Menu />
      <Container>Lista
        {produtos.map(produto => 
          <div>
            <p>{produto.produto}</p>
            <p>{produto.descricao}</p>
          </div>
        )}
        </Container> 
      <Footer />
    </>
  );
}
