import { useRouter } from 'next/navigation';

export function routerPush(
    setIsOpen: (isOpen: boolean) => void,
    router: ReturnType<typeof useRouter>,
    locale: string
) {
    router.push(locale);
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
