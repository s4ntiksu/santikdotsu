 interface AgeProps {
  birthDate: Date;
}

const Age: React.FC<AgeProps> = ({ birthDate }) => {
  const calculateAge = (): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <div>
      <p className="text-white text-center font-google">{calculateAge()} y.o. Fun budding frontend developer. I live in Russia 🇷🇺, Saratov region.</p>
    </div>
  );
}

export default Age;