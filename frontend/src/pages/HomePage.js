import React from 'react'
import "../styles/components/pages/HomePage.css"

const HomePage = (props) => {
  return (
    <main className='holder'>
      <div className='homeimg'>
        <img src="https://images.adsttc.com/media/images/6027/27e3/f91c/8176/4b00/0347/newsletter/8.jpg?1613178815" alt="" />
      </div>
      <div className='columnas'>
         <div className='bienvenidos'>
           <h2>Bienvenidos</h2>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam recusandae sint, saepe, impedit, illo animi doloremque voluptatibus dolorum id quos quas error porro? Ipsam libero fugiat placeat mollitia autem? Soluta.
           Vero ipsam recusandae enim neque quae sint ipsa laudantium, libero maiores nam est dolores inventore quia perspiciatis ducimus sapiente? Perferendis esse, natus placeat quas quasi eum tenetur voluptatem ratione ea.
           Voluptatem eum beatae enim ipsam sequi maiores nemo delectus nobis error veniam ipsum distinctio quos, dignissimos fugit dolorum itaque neque, obcaecati doloremque! Quas quo minus provident tempora corrupti quia iusto?
           Ipsam laboriosam suscipit, natus corporis veniam reiciendis possimus officia dignissimos quasi facilis perferendis dolor labore eaque molestias! Temporibus, ratione repellendus nulla eius officia maxime cumque quos labore minus explicabo. Voluptatem?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nulla! Atque cumque veniam voluptatum dolores enim? Iusto fugit tempora ratione dolores doloremque. Repellendus labore dolore voluptas voluptate voluptatum vero? Doloremque.
           Dolor officia, ipsum esse eius vitae reiciendis non adipisci. Odit explicabo, omnis cumque sint fugiat tempora consectetur minus enim fugit harum? Voluptatum, nobis. Minus labore delectus libero obcaecati animi non!
           Fugiat repudiandae nostrum officiis tenetur voluptatum perspiciatis ducimus sapiente id recusandae et minima optio numquam nam magnam pariatur non, corporis similique laborum? Incidunt, tempora. Odio amet fugiat veritatis voluptate deserunt.</p>
         </div>
         <div className='testimonios'>
            <h2>Testimonios</h2>
            <div className='testimonio'>
              <span className='cita'> Simplemente excelente comida</span>
              <span className='autor'>juan perez - comensal</span>
            </div>
         </div>
      </div>
    </main>
  )
}

export default HomePage