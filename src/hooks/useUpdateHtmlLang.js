import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { localeAtom } from '../state/atom-states';


const useUpdateHtmlLang = () => {
  const currentLocale = useRecoilValue(localeAtom);

  useEffect(() => {
    document.documentElement.lang = currentLocale;
  }, [currentLocale]);
};

export default useUpdateHtmlLang;