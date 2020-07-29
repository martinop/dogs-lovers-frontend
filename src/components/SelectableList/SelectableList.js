import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View, TouchableOpacity, FlatList } from 'react-native';
import styles from './SelectableList-styles';
import VText from '../VText';
import BoxShadow from '../BoxShadow';

function SelectableList({
	options,
	title,
	name,
	selected,
	onSelect,
}) {
	const selectedIds = selected?.map(e => e.id);
	const _options = options.filter(e => !selectedIds.includes(e.id));
	const [openModal, setOpenModal] = useState(false);
	function handleSelect(val) {
		onSelect(val);
		setOpenModal(false);
	}
	function onOpen() {
		setOpenModal(true);
	}
	return (
		<>
			<VText style={styles.label}>{title}</VText>
			<View style={styles.list}>
				{selected?.map((val, key) => (
					<BoxShadow key={`option-${key + 1}`} style={styles.box} onPress={() => onSelect(val)}>
						<VText style={styles.textValue}>{val.name}</VText>
					</BoxShadow>
				))}
				{_options.length > 0 && (
					<BoxShadow style={styles.addBox} onPress={onOpen}>
						<VText style={styles.textValue}>Agregar</VText>
					</BoxShadow>
				)}
			</View>
			<Modal
				isVisible={openModal}
				onBackButtonPress={() => setOpenModal(false)}
				onBackdropPress={() => setOpenModal(false)}
				testID={`modal-${name}`}
				animationIn="slideInLeft"
				animationOut="slideOutRight"
			>
				<FlatList
					keyExtractor={item => item.id}
					initialNumToRender={20}
					style={styles.modalContent}
					data={_options}
					renderItem={({ item, index }) => (
						<View key={`dropdown-${name}-${index + 1}`} style={styles.item}>
							<TouchableOpacity onPress={() => handleSelect(item)}>
								<VText style={styles.textItem}>
									{item.name}
								</VText>
							</TouchableOpacity>
						</View>
					)}
				/>
			</Modal>
		</>
	);
}

export default SelectableList;
