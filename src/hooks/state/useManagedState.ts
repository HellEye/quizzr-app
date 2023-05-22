import { useRef, useState, type Dispatch, type SetStateAction } from 'react'

type Options<T> = {
  value?: T
  setValue?: Dispatch<SetStateAction<T>>
  defaultValue?: T
}

const useManagedState = <T>(options?: Options<T>) => {
  const isManaged = useRef<boolean>(false)
  if (options?.value !== undefined && options?.setValue !== undefined) {
    isManaged.current = true
  }
  const [state, setState] = useState<T>()

  if (!options || !options.value) {
    return [state, setState] as const
  }
  return [options.value, options.setValue] as const
}

export { useManagedState }
