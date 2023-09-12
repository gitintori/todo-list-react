// Tem html dentro do js, é react (jsx)
import checkmark from '../../assets/checkmark.png'
import deletebutton from '../../assets/deletebutton.svg'
import Item from './Item.styled'

type ItemComponentProps = {
  id: string,
  checked: boolean,
  onCheck: () => void,
  text: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onDelete: () => void
}

const ItemComponent = (props: ItemComponentProps): JSX.Element => {
  console.log(props)

  return (
    <Item.ListItem>
      <Item.Checkbox
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={props.onCheck}
      />

      <Item.Label htmlFor={props.id} isActive={props.checked}>
        <Item.CheckmarkWrapper isActive={props.checked}>
          <Item.Checkmark isActive={props.checked} src={checkmark}/>
        </Item.CheckmarkWrapper>

        <Item.InputText type="text" autoFocus value={props.text} onChange={props.onChange} />

        <Item.RemoveButton type="button" onClick={props.onDelete}>
          <img src={deletebutton} />
        </Item.RemoveButton>
      </Item.Label>
    </Item.ListItem>
  )
}

export default ItemComponent