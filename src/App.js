import { Container, Card, Form, Button, Carousel, CarouselItem } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
  const [data, setData] = useState({});

  const onChange = (e) => {
    e.preventDefault();
    const obj = data;
    obj[e.target.name] = e.target.value;
    setData(obj);
  }
  const onClick = (e) => {
    console.log(e);
  }

  const technologiaSociedad = [
    "¿Cómo crees que la inteligencia artificial cambiará el mercado laboral en los próximos 10 años?",
    "¿Qué impacto tiene la tecnología en las relaciones interpersonales?",
    "Explica cómo las redes sociales han transformado el periodismo",
    "¿De qué manera los dispositivos móviles han cambiado la manera en que consumimos información?",
    "¿Cómo influye la digitalización en el sector educativo?",
    "¿Cuál es el rol de la ética en el desarrollo tecnológico?"
  ]

  const medioAmbiente = [
    "¿Cómo crees que la ciencia puede contribuir a la conservación de especies en peligro de extinción?",
    "Explica el papel de la energía renovable en la lucha contra el cambio climático.",
    "¿De qué manera la agricultura sostenible puede mitigar el impacto ambiental?",
    "¿Qué desafíos enfrenta la humanidad para lograr una economía circular?",
    "¿Qué papel tiene la biotecnología en la sostenibilidad ambiental?",
    "¿Cómo afecta la contaminación plástica a los ecosistemas marinos?"
  ]

  const historiaPolitica = [
    "¿Cuáles fueron las principales causas de la Primera Guerra Mundial?",
    "Explica el impacto de la Revolución Industrial en la configuración de las sociedades modernas.",
    "¿Cómo influyó la Guerra Fría en el desarrollo de la tecnología espacial?",
    "¿Qué importancia tuvo el movimiento sufragista en la historia de los derechos humanos?",
    "¿De qué manera los movimientos independentistas influyeron en la configuración de América Latina?",
    "¿Qué efectos tuvo la caída del Muro de Berlín en la política internacional?"
  ]

  const economiaFinanzas = [
    "¿Cómo afecta la inflación al poder adquisitivo de los ciudadanos?",
    "¿Qué rol desempeñan los bancos centrales en la economía de un país?",
    "¿Cómo influyen las tasas de interés en las decisiones de inversión de las empresas?",
    "¿Qué impacto tiene el comercio internacional en el crecimiento económico?",
    "¿De qué manera la automatización está transformando el sector manufacturero?",
    "¿Cómo afecta el crecimiento del comercio electrónico a las pequeñas empresas?"
  ]

  const culturaSociedad = [
    "¿Cómo influyen las tradiciones culturales en la identidad de un país?",
    "¿Qué impacto tiene la globalización en la homogeneización cultural?",
    "¿Cuál es el papel de la música en la construcción de la identidad juvenil?",
    "¿De qué manera el cine refleja los problemas sociales de una época?",
    "¿Cómo contribuye la literatura a la difusión de ideas filosóficas y políticas?",
    "¿Qué impacto tiene el arte urbano en la transformación de los espacios públicos?"
  ]

  const cienciaTechnologia = [
    "¿Qué importancia tiene la ciencia de datos en la toma de decisiones empresariales?",
    "Explica cómo la inteligencia artificial está revolucionando el campo de la medicina.",
    "¿Qué rol juegan los avances en materiales en la innovación tecnológica?",
    "¿Cómo influye la computación cuántica en el futuro de la ciberseguridad?",
    "¿Qué impacto tienen los vehículos autónomos en la industria del transporte?",
    "¿Cómo afecta el desarrollo de robots en la automatización industrial?"
  ]

  const psicologia = [
    "¿Cómo influyen las redes sociales en la autoestima de los adolescentes?",
    "Explica la relación entre el estrés y las enfermedades físicas.",
    "¿Qué factores psicológicos influyen en la toma de decisiones?",
    "¿De qué manera la pandemia afectó la salud mental a nivel global?",
    "¿Cómo se puede mejorar el bienestar emocional en el entorno laboral?",
    "¿Qué impacto tiene la meditación en el control de la ansiedad?"
  ]

  const filosofiaEtica = [
    "¿Cuál es el significado de la 'libertad' en la filosofía de Jean-Paul Sartre?",
    "¿De qué manera la ética utilitarista influye en la toma de decisiones morales?",
    "Explica el concepto de 'justicia' según John Rawls.",
    "¿Qué impacto tiene el relativismo moral en la sociedad contemporánea?",
    "¿Cómo ha evolucionado la concepción del 'bien común' a lo largo de la historia de la filosofía?",
    "¿Qué desafíos plantea la ética en el ámbito de la inteligencia artificial?"
  ]

  const educacionAprendizaje = [
    "¿Qué papel juega la motivación intrínseca en el aprendizaje?",
    "¿Cómo pueden las nuevas tecnologías mejorar el proceso de enseñanza-aprendizaje?",
    "¿De qué manera el aprendizaje colaborativo fomenta el desarrollo de habilidades blandas?",
    "¿Cómo influyen los estilos de aprendizaje en la adquisición de conocimientos?",
    "¿Qué importancia tiene el desarrollo del pensamiento crítico en la educación?",
    "¿Cómo puede la educación emocional contribuir a la formación integral de los estudiantes?"
  ]

  const deportesSalud = [
    "¿Cómo influye la práctica regular de ejercicio en la salud mental?",
    "¿Qué factores psicológicos afectan el rendimiento de los atletas de alto rendimiento?",
    "¿Cómo ha evolucionado la tecnología en el análisis del rendimiento deportivo?",
    "¿De qué manera la nutrición influye en el rendimiento deportivo?",
    "¿Cómo afecta el dopaje en la ética del deporte profesional?",
    "¿Qué impacto tiene el deporte en la cohesión social y comunitaria?"
  ]

  const nombres = [
    "Tecnología y Sociedad",
    "Ciencia y Medio Ambiente",
    "Historia y Política",
    "Economía y Finanzas",
    "Cultura y Sociedad",
    "Ciencia y Tecnología",
    "Psicología y Salud Mental",
    "Filosofía y Ética",
    "Educación y Aprendizaje",
    "Deportes y Salud"
  ]

  return (
    <Container>
      <Tabs
        defaultActiveKey="Tecnología y Sociedad"
        id="uncontrolled-tab-example"
        className="mb-3">
        {
          nombres.map((nombre, k) => (
            <Tab eventKey={nombre} title={nombre}>
              <Card className='mt-3'>
                <Card.Body>
                  <Card.Title>
                    {nombre}
                  </Card.Title>
                  <Form>
                    {
                      technologiaSociedad.map((value, i) => (
                        <Form.Group className='mt-3'>
                          <Form.Label>{value}</Form.Label>
                          <Form.Control onChange={onChange} name={`q${k}-${i}`} placeholder='Ingresa tu respuesta' />
                        </Form.Group>
                      ))
                    }
                    <Button type='submit' onClick={() => onClick()}>Enviar</Button>
                    <Button type='reset' variant='danger'>Cancelar</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Tab>
          ))
        }
      </Tabs>
    </Container>
  );
}

export default App;
