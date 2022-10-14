import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Info(props: Props) {
  const { setShowInfo } = props;
  const baseDiv = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (baseDiv.current) {
      baseDiv.current.classList.remove('h-[859px]');
      baseDiv.current?.classList.add('h-0');
    }
    setTimeout(() => {
      setShowInfo(false);
    }, 500);
  };
  useEffect(() => {
    setTimeout(() => {
      if (baseDiv.current) {
        baseDiv.current.classList.remove('h-0');
        baseDiv.current?.classList.add('h-[859px]');
      }
    }, 100);
  }, [baseDiv]);

  return (
    <>
      <div
        className="absolute top-0 left-0 z-20 w-screen h-screen filter backdrop-blur-sm"
        onClick={handleClick}></div>
      <div
        ref={baseDiv}
        className={`transition-all text-amber-900 font-pfeffer duration-500 flex items-center justify-center m-auto relative z-40 rounded-lg filter backdrop-blur-sm h-0 w-[690px]`}
        style={{
          backgroundImage: `url("/info-scroll.png")`,
          backgroundSize: 'fill',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
        <div className="w-1/2 whitespace-pre-line h-[469px] overflow-auto noscroll">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
          vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
          quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
          similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
          architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
          quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
          quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
          modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime
          adipisci amet laborum.
          <br />
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
          quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
          temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima
          excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur
          veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est
          explicabo fugiat, dolorum eligendi quam
          <br /> cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
          Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint
          culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga.
          Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
          vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
          quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
          similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
          architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
          quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
          quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
          modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime
          adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
          voluptates a cumque velit quibusdam sed amet tempora.
          <br />
          Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
          magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic
          maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis
          ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam
          cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem
          quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa,
          recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis
          earum veniam quasi aliquam eligendi, placeat qui corporis!
        </div>
        <img
          // eslint-disable-next-line no-undef
          src={require('../images/cross-icon.png')}
          className="absolute hidden cursor-pointer right-4 top-4"
          onClick={handleClick}
        />
      </div>
    </>
  );
}

Info.propTypes = {
  setShowInfo: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof Info.propTypes>;

export default Info;
