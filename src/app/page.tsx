"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

import header_fg from '../../public/images/header_fg.png'
import BorderButton from "./components/borderButton";
import MobileMenu from "./components/mobileMenu";


export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main>
      <div className="welcome-section-wrapper">
        <div className="welcome-section">
          <Image
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            src={header_fg} alt="fg-image" className="fg" />

          <div className="welcome-text px-3 sm:pl-20">
            <h1 className="welcome-h1 mb-2 hidden md:block">Welcome<br /> To The Second <br /> Level of the process</h1>
            <h1 className="welcome-h1 mb-2 md:hidden">Welcome To <br /> The Second Level <br />  of the process</h1>
            <h6 className="welcome-h6 mb-7">Congratulations on Passing The Screening Interview</h6>
            <BorderButton label="Get Started" />
          </div>

        </div>
      </div>
      <div className="text">
        If the navbar is not sticking to the top of the screen even after adjusting the z-index and removing potential conflicting styles, there might be other factors affecting its behavior. Here are some additional steps you can take to troubleshoot and ensure the navbar sticks properly:

        Check for Conflicting Styles: Ensure there are no conflicting styles from other parts of your code or external libraries that might interfere with the navbar's sticky behavior.

        Inspect Browser Dev Tools: Use your browser's developer tools to inspect the navbar element and see if there are any unexpected styles being applied that could affect its positioning.

        Test in Different Browsers: Test the page in different browsers to see if the issue persists across different environments. Sometimes browser-specific quirks can affect the behavior of sticky elements.

        Simplify the Layout: Temporarily remove any unnecessary elements or styles from your page to simplify the layout. This can help isolate the issue and identify any specific elements or styles causing the problem.

        Check JavaScript Errors: If you're using JavaScript on your page, ensure there are no errors in the console that could be preventing the sticky behavior from working correctly.

        Consider Using a Framework or Library: If you're still encountering issues, consider using a front-end framework or library like Bootstrap or Tailwind CSS, which often provide built-in components for sticky navigation bars that are well-tested and reliable across different browsers.

        By following these steps and carefully inspecting your code, you should be able to identify and resolve the issue preventing your navbar from sticking to the top of the screen. If you're still having trouble, providing more details or code snippets could help in diagnosing the problem further.
        If the navbar is not sticking to the top of the screen even after adjusting the z-index and removing potential conflicting styles, there might be other factors affecting its behavior. Here are some additional steps you can take to troubleshoot and ensure the navbar sticks properly:

        Check for Conflicting Styles: Ensure there are no conflicting styles from other parts of your code or external libraries that might interfere with the navbar's sticky behavior.

        Inspect Browser Dev Tools: Use your browser's developer tools to inspect the navbar element and see if there are any unexpected styles being applied that could affect its positioning.

        Test in Different Browsers: Test the page in different browsers to see if the issue persists across different environments. Sometimes browser-specific quirks can affect the behavior of sticky elements.

        Simplify the Layout: Temporarily remove any unnecessary elements or styles from your page to simplify the layout. This can help isolate the issue and identify any specific elements or styles causing the problem.

        Check JavaScript Errors: If you're using JavaScript on your page, ensure there are no errors in the console that could be preventing the sticky behavior from working correctly.

        Consider Using a Framework or Library: If you're still encountering issues, consider using a front-end framework or library like Bootstrap or Tailwind CSS, which often provide built-in components for sticky navigation bars that are well-tested and reliable across different browsers.

        By following these steps and carefully inspecting your code, you should be able to identify and resolve the issue preventing your navbar from sticking to the top of the screen. If you're still having trouble, providing more details or code snippets could help in diagnosing the problem further.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eaque
        accusantium facilis quam quasi iste non consectetur sed obcaecati illum
        eveniet corporis magnam molestiae dignissimos earum fugiat dolorem
        commodi iure, tempora, suscipit impedit ipsa! Odit molestiae eaque
        labore pariatur tenetur consequatur fuga, dolores facere deserunt sed
        rerum adipisci numquam quidem nam non similique assumenda temporibus
        excepturi maiores est dicta deleniti officiis? Eligendi officia dolorum
        commodi ad libero necessitatibus cum doloribus beatae? Debitis illum id
        aut veritatis necessitatibus odit vel reprehenderit nihil asperiores
        delectus, accusantium doloribus hic minima voluptatibus sed, facilis
        rerum expedita! Harum aspernatur eaque mollitia nesciunt cupiditate
        animi, sit ipsa quas accusamus autem exercitationem ut eveniet maiores,
        inventore rem rerum sapiente? Quaerat repellendus magnam iste possimus
        exercitationem quas dolor iusto repellat sunt ipsam a pariatur
        necessitatibus quia voluptatibus, voluptatem perferendis et. Sequi
        quidem eligendi, natus nihil blanditiis ullam a sint velit facilis saepe
        repellat numquam beatae magni voluptate eaque minus itaque atque neque
        temporibus quia rerum. Repellendus sit optio sapiente? Eaque accusantium
        ipsam sit. Delectus repellat dolore quam magni optio, sapiente quibusdam
        minima accusamus necessitatibus asperiores nobis a eaque ea labore enim
        beatae ratione quos? Expedita eaque reiciendis tempora ex reprehenderit
        quasi a quas! Voluptates, minima quo? Provident, nostrum reprehenderit
        harum voluptatem repudiandae, veniam possimus, quam facilis eligendi
        fugit culpa aliquid? Velit reiciendis laudantium doloribus nihil autem!
        Ducimus sequi illo delectus optio id! Repellendus harum sit facere autem
        voluptatem ducimus laudantium, ex, sed accusantium voluptatibus
        inventore cum velit iusto illum totam assumenda voluptates veritatis
        eveniet perspiciatis, quibusdam esse iure. Quam, architecto et
        cupiditate cumque ipsa placeat dignissimos, odio praesentium iure
        facilis, reiciendis beatae ut repellat. Esse placeat quisquam velit cum.
        Blanditiis, ipsum quidem consequatur corrupti architecto qui voluptates
        minus? Totam ut dicta doloremque dolorum distinctio atque impedit!
        Incidunt ratione beatae accusamus repellat rerum id, sit doloribus nobis
        quaerat excepturi.
      </div>
    </main>
  );
}
