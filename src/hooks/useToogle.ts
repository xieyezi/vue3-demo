import { Ref, ref } from 'vue'

type Returnd = { visible: Ref<boolean>; onVisible: (visible?: boolean) => void }

const useVisible = (initVisible = false): Returnd => {
	const visible = ref<boolean>(initVisible)
	function onVisible(value?: boolean) {
		const newValue = typeof value === 'boolean' ? value : !visible.value
		visible.value = newValue
	}
	return { visible, onVisible }
}
export default useVisible
