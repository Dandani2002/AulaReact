import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default function Sobre(props) {
 return (
   <View>
    <Text>
     Sobre o site
     </Text>
   

    <Text>
     Somos um grupo de fanáticos de hardware, especificamente de teclados mecanicos, aqui falaremos sobre eles e será uma plataforma de venda dos mesmos.
     </Text>
     <View>
     <View>
       Qual a diferença de um Teclado mecanico e um Teclado de membrana?
       <View>
       O teclado mecânico tem seu próprio processador e firmware que decodifica o sinal e o envia para as portas de E/S do seu computador. 
       
       Porém, a parte do teclado que aciona esse fechamento do circuito é o que difere entre um teclado mecânico e um de membrana.
  
       <View>Um teclado mecânico tem interruptores individuais embaixo de cada tecla que são operados por mola com pequenos contatos de metal que fecham o circuito 
       
       quando você pressiona. Um teclado de membrana, por outro lado, consiste em uma membrana de silicone/poliuretano/borracha que percorre todo o comprimento da placa.

       </View> 
        <View>Existem pequenas cúpulas sob cada tecla, com um material condutor por baixo. Essas cúpulas se comprimem durante o pressionamento de uma tecla e forçam a tampa 
       
       da tecla para cima quando você a solta.
        </View>
       
        <View>Abaixo dessa camada superior está outra membrana equipada com uma camada de circuito. No meio, há uma camada de suporte não condutiva
       
       com orifícios colocados onde as chaves deveriam estar. Quando as membranas superior e inferior entram em contato, elas fecham o circuito e um pressionamento de tecla é registrado.

       </View>Fabricar um teclado de membrana leva menos tempo e é mais barato, pois não há tantas peças e requisitos de mão de obra. Você pode simplesmente imprimir
      
       membranas em vez de construir e testar interruptores individuais. O design da membrana também é mais resistente à água. Na verdade, uma variante dele é usada em
        
       eletrodomésticos comuns, como micro-ondas e máquinas de lavar.
       </View>
     </View>
    </View>
   </View>
        
  );
}