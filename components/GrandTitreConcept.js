import Image from 'next/image';

const containerParagraphe = {
  marginTop: '20%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const containerSousTitre = {
  width: '30%',
};

const titleParagraphe = {
  fontSize: '2.5rem',
  fontFamily: "'Montserrat Alternates', sans-serif",
  color: '#3c84fb',
};

const paragrapheConcept = {
  fontFamily: "'Krub', sans-serif",
  fontSize: '16px',
};

// const containerImg = {
//   boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
// };

export default function GrandTitreConcept() {
  return (
    <div>
      <div style={containerParagraphe}>
        <Image
          // style={containerImg}
          src="/images/parent.jpg"
          alt="Picture of the author"
          width={600}
          height={500}
        />
        <div style={containerSousTitre}>
          <h3 style={titleParagraphe}>Les enjeux</h3>
          <p style={paragrapheConcept}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
      <div style={containerParagraphe}>
        <Image
          src="/images/parent.jpg"
          alt="Picture of the author"
          width={600}
          height={500}
        />
        <div style={containerSousTitre}>
          <h3 style={titleParagraphe}>Les précautions</h3>
          <p style={paragrapheConcept}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
      <div style={containerParagraphe}>
        <Image
          src="/images/parent.jpg"
          alt="Picture of the author"
          width={600}
          height={500}
        />
        <div style={containerSousTitre}>
          <h3 style={titleParagraphe}>En securité avec Babily</h3>
          <p style={paragrapheConcept}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
    </div>
  );
}
