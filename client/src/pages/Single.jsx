import React from 'react'
import Edit from '../images/edit.png'
import Delete from '../images/delete1.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://www.livemint.com/lm-img/img/2023/03/25/600x338/ANI-20230324163-0_1679709649590_1679709649590_1679709676653_1679709676653.jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202302/amit-shah-sixteen_nine.jpg?size=948:533"
            alt=""
          />
          <div className="info">
            <span>Amit Shah</span>
            <p>Posted 1 hour ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Narendra Modi : Most Loved Leader in the World</h1>
        <p>
          Prime Minister Narendra Modi has featured in the Time Magazine’s 100
          most influential people of 2021 list, making it his fifth time after
          2014, 2015, 2017, and 2020. The profile of the Prime Minister, penned
          by CNN journalist Fareed Zakaria, says that India has had three
          pivotal leaders since independence which includes Jawaharlal Nehru,
          Indira Gandhi and Modi.
          <br />
          <br />
          “Narendra Modi is the third, dominating the country’s politics like no
          one since them,” read the profile which also alleged that Modi has
          ‘pushed the country away from secularism and toward Hindu
          nationalism’. The profile has also accused PM Modi of eroding the
          rights of the Muslim minority in the country and imprisoning and
          intimidating journalists.
          <br />
          <br />
          Besides PM Modi, West Bengal Chief Minister Mamata Banerjee and Serum
          Institute of India CEO Adar Poonawalla, who is spearheading the
          COVID-vaccine supply in India, have found a place among the world’s
          100 most influential people of 2021 by TIME magazine. Globally, the
          list includes US President Joe Biden, US Vice President Kamala Harris,
          former US President Donald Trump, Chinese President Xi Jinping, Duke
          and Duchess of Sussex Prince Harry and Meghan, and co-founder of the
          Taliban Mullah Abdul Ghani Baradar.
          <br />
          <br />
          “Narendra Modi is the third, dominating the country’s politics like no
          one since them,” read the profile which also alleged that Modi has
          ‘pushed the country away from secularism and toward Hindu
          nationalism’. The profile has also accused PM Modi of eroding the
          rights of the Muslim minority in the country and imprisoning and
          intimidating journalists.
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single