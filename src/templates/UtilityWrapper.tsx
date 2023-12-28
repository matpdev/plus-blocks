import { ReactNode } from 'react';
import Notification from '../components/utils/Notification';
import Sideover from '../components/utils/Sideover';
import { useStore as useModal } from '../store/Modal';
import { useStore as useNotification } from '../store/Notification';
import { useStore as useSideover } from '../store/Sideover';
interface ChildrenOnly {
  children: ReactNode
}
export default function UtilityWrapper({ children }: ChildrenOnly) {
  const { open: openModal } = useModal(store => store.state)
  const { open: openSideover } = useSideover(store => store.state)
  const { show: openNotification } = useNotification(store => store.state)
  return <>
    {/* {openModal && <Modal />} */}
    {openSideover && <Sideover />}
    {openNotification && <Notification />}
    {children}
  </>
}
