export default {
  title: 'Playground',
}
export const Background = () => {
  return (
    <div className="w-64 p-4">
      Base
      <div className="bg-background-2 p-4">
        Bg 2<div className="bg-background-3 p-4">Bg 3</div>
      </div>
      <div className="bg-background-3 p-4">Bg 3</div>
    </div>
  )
}
