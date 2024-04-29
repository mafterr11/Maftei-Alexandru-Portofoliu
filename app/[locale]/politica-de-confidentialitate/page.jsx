import { useTranslations } from "next-intl";

const PoliticaDeConfidentialitate = () => {
  const t = useTranslations("Terms");
    return (
      <div className='container mx-auto py-[12rem]'>
        <h2 className='text-accent text-center font-normal mb-32'>
          {t("titlu")}
        </h2>
        <p className='text-sm my-4'>
          <span className='text-accent'>-</span> {t("1")}
        </p>
        <p className='text-sm my-4'>
          <span className='text-accent'>-</span> {t("2")}
        </p>
        <p className='text-sm my-4'>
          <span className='text-accent'>-</span> {t("3")}
        </p>
        <p className='text-sm my-4'>
          <span className='text-accent'>-</span> {t("4")}
        </p>
        <p className='text-sm my-4'>
          <span className='text-accent'>-</span> {t("5")}
        </p>
  
        <p>
        {t("6")}
        </p>
        <p className='text-sm mb-6'>
        {t("7")}
        </p>
  
        <p className='text-sm my-4'>
          <span className='text-accent'>-</span> {t("8")}
        </p>
        <p className='text-sm my-4'>
          <span className='text-accent'>-</span> {t("9")}
        </p>
        <p className='text-sm my-4'>
          <span className='text-accent'>-</span> {t("10")}
        </p>
        <p className='text-sm my-4'>
          <span className='text-accent'>-</span> {t("11")}
        </p>
  
        <p className='text-lg mb-6 mt-8'>
        {t("12")}
        </p>
  
        <p className='text-sm text-accent mb-2'>
        {t("13")}
        </p>
        <p className='text-sm text-accent mb-2'>
        {t("14")}
        </p>
        <p className='text-sm text-accent mb-2'>
        {t("15")}
        </p>
        <p className='text-sm text-accent mb-2'>
        {t("16")}
        </p>
        <p className='text-sm text-accent mb-2'>
        {t("17")}
        </p>
        <p className='text-sm text-accent mb-2'>
        {t("18")}
        </p>
        <p className='text-sm text-accent mb-2'>
        {t("19")}
        </p>
        <p className='text-sm text-accent mb-2'>
        {t("20")}
        </p>
        <p className='text-sm text-accent mb-8'>
        {t("21")}
        </p>
  
        <p>
        {t("22")}
        </p>
      </div>
    );
  };
  
  export default PoliticaDeConfidentialitate;
  