import DivEspecialidades from "./DivEspecialidades";
import "../../styles/productos.css";

function Especialidades() {
  return (
    <>
      <h2>Productos</h2>
      <DivEspecialidades
        icono="data:image/png;base64,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"
        iconoAlt="Pan"
        imagen="https://www.infobae.com/resizer/v2/SBNF5VFWUBCJTKDGHQN7KA2XB4.jpg?auth=be8953c4275595fff31f9d38a90366432993cf0614457c6a98e8ccabc7dd32bb&smart=true&width=992&height=661&quality=85"
        imagenAlt="Panaderia"
        especialidades="Panadería"
        texto="Panes, galletas, bizcochos"
        order1="0"
        order2="1"
      />
      <DivEspecialidades
        icono="https://t4.ftcdn.net/jpg/14/66/32/97/360_F_1466329751_FU0ifkXoc6c7UnDMLL51wE4Qi382XGBd.jpg"
        iconoAlt="Medialuna"
        imagen="https://i.pinimg.com/474x/05/72/98/057298fd6dce58a10868606e37cb774e.jpg"
        imagenAlt="Facturas"
        especialidades="Confitería"
        texto="Gran variedad de facturas"
        order1="1"
        order2="0"
      />
      <DivEspecialidades
        icono="https://previews.123rf.com/images/ylivdesign/ylivdesign1609/ylivdesign160906267/63183274-pedazo-de-icono-de-pastel-en-estilo-simple-en-una-ilustraci%C3%B3n-de-vector-de-fondo-blanco.jpg"
        iconoAlt="Torta"
        imagen="https://www.clarin.com/img/2020/05/26/HJqwRusnh_1256x620__2.jpg#1590514571437"
        imagenAlt="Masas Secas"
        especialidades="Pastelería Dulce"
        texto="Postres, tartas, tortas, masas finas, masas secas, budines, roscas, merengues, mini-postres."
        order1="0"
        order2="1"
      />
      <DivEspecialidades
        icono="https://previews.123rf.com/images/yupiramos/yupiramos1708/yupiramos170801943/83186088-icono-de-s%C3%A1ndwich-sobre-fondo-blanco-ilustraci%C3%B3n-vectorial.jpg"
        iconoAlt="Sandwich"
        imagen="https://www.dulcesguijo.com/wp-content/uploads/2020/11/2020-11-13-1-1024x788.jpg"
        imagenAlt="Canape Salados"
        especialidades="Pastelería Salada"
        texto="Bocaditos salados, pancitos, locatellis, sacramentos, empanadas, chips, brochets."
        order1="1"
        order2="0"
      />
    </>
  );
}

export default Especialidades;
