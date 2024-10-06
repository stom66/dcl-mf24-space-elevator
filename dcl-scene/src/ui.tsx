
import { movePlayerTo } 		from '~system/RestrictedActions'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { Color4, Vector3 } from '@dcl/sdk/math'


export function ui_debug() {

	return(
		<UiEntity
			uiTransform={{
				width         : 220,
				height        : 200,
				flexDirection : 'column',
				alignItems    : 'flex-start',
				justifyContent: 'space-between',
				margin        : { top: '35px', right: '50px' },
				padding : '10px',
				position      : {right: 0, top: 300},
				positionType: "absolute"
			}}
			uiBackground={{ color: Color4.fromHexString("#4C958133") }}
		>

			<Label
				key         = "title"
				uiTransform = {{
					 width: 180, height: 40, margin: 8, 
					 flexDirection : 'column',
					 alignItems    : 'flex-start',
					 justifyContent: 'space-between'
				}}
				value       = 'Teleport Menu'
				color={Color4.White()}
				fontSize    = {14}
				textAlign   = "middle-left"
			/>

			<Button
				key         = "base"
				uiTransform = {{ width: 180, height: 40, margin: 8 }}
				value       = 'Base Station'
				variant     = 'primary'
				fontSize    = {14}
				onMouseDown = {() => {
					movePlayerTo({
						newRelativePosition: Vector3.create(24, 7, 26),
						cameraTarget       : Vector3.create(8, 1, 8),
					})
				}}
			/>

			<Button
				key         = "midway"
				uiTransform = {{ width: 180, height: 40, margin: 8 }}
				value       = 'Midway'
				variant     = 'primary'
				fontSize    = {14}
				onMouseDown = {() => {
					movePlayerTo({
						newRelativePosition: Vector3.create(28, 32, 18),
						cameraTarget       : Vector3.create(8, 1, 8),
					})
				}}
			/>

			<Button
				key         = "topdeck"
				uiTransform = {{ width: 180, height: 40, margin: 8 }}
				value       = 'Spsace Station'
				variant     = 'primary'
				fontSize    = {14}
				onMouseDown = {() => {
					movePlayerTo({
						newRelativePosition: Vector3.create(28, 63, 18),
						cameraTarget       : Vector3.create(8, 1, 8),
					})
				}}
			/>
		</UiEntity>
	)
}