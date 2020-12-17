import Image from 'next/image';

export default function concept() {
  const containerNotreConcept = {
    backgroundColor: '#faf5f0',
    height: '40vh',
    width: '100%',
  };

  const titleConcept = {
    margin: '0',
    fontFamily: "'Montserrat Alternates', sans-serif",
    lineHeight: '44px',
    paddingLeft: '10%',
    color: '#3c84fb',
    fontSize: '2.5rem',
  };

  const paragrapheConcept = {
    paddingLeft: '10%',
    width: '50%',
    fontFamily: "'Krub', sans-serif",
    fontSize: '16px',
    lineHeight: '30px',
    margin: '0',
    marginBottom: '5%',
  };

  // const parentImg = {
  //   display: 'flex',
  //   justifyContent: 'flex-end',
  //   zIndex: '1',
  // };
  return (
    <div style={containerNotreConcept}>
      <h3 style={titleConcept}>Notre concept, c'est vous</h3>
      <Image
        // style={parentImg}
        src="/images/parent.jpg"
        alt="Picture of the author"
        width={300}
        height={200}
      />
      <p style={paragrapheConcept}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
        <br />
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enim.
      </p>
    </div>
  );
}
