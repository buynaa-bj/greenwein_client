import { toast } from 'react-hot-toast'

export const showToast = ({ type = 'default', message, description }) => {
  const baseOptions = {
    duration: 3000,
    position: 'top-right',
  }

  switch (type) {
    case 'add-cart':
      toast.success(message || 'Сагсанд нэмэгдлээ!', {
        ...baseOptions,
        icon: '🛒',
      })
      break

    case 'add-wishlist':
      toast.success(message || 'Хүслийн жагсаалтад нэмэгдлээ!', {
        ...baseOptions,
        icon: '💖',
      })
      break

    case 'error':
      toast.error(message || 'Сагснаас хасагдлаа.', {
        ...baseOptions,
        icon: '❌',
      })
      break
    case 'success':
      toast.error(message || 'Та эхлээд логин хийнэ үү', {
        ...baseOptions,
        icon: '❌',
      })
      break

      case 'logout':
      toast.error(message || 'Амжилттай гарлаа.', {
        ...baseOptions,
        icon: '✅',
      })
      break

    case 'order':
      toast.success(message || 'Захиалга амжилттай!', {
        ...baseOptions,
        icon: '✅',
      })
      break

    default:
      toast(message || 'Мэдэгдэл.', baseOptions)
      break
  }
}