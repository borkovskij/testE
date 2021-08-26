import React, { Fragment } from 'react';
import P from 'prop-types';
import { PaginationWrapper, PageNumberContainer, ListItem, Button } from './styled';

class Pagination extends React.Component {
	static propTypes = {
		page: P.number,
		onPageChange: P.func,
		itemsPerPage: P.number,
		totalItems: P.number,
		totalPages: P.number,
	};

	constructor(props) {
		super(props);
		this.state = {
			maxPageNumberLimit: 5,
			minPageNumberLimit: 0,
		};
	}

	handlePageNumberClick = (event) => {
		this.props.onPageChange(event.target.id);
	};

	renderPageNumbers = () => {
		const { maxPageNumberLimit, minPageNumberLimit } = this.state;
		const items = [];

		for (let page = 1; page <= this.props.totalPages; page++) {
			if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
				const item = (
					<ListItem key={page} id={page} onClick={this.handlePageNumberClick}>
						{page}
					</ListItem>
				);
				items.push(item);
			}
		}
		return items;
	};

	handleNextbtn = () => {
		const { page, onPageChange, pageNumberLimit } = this.props;

		const pageNum = page + 1;
		onPageChange(pageNum);

		if (page + 1 > this.state.maxPageNumberLimit) {
			this.setState((prevState) => ({
				maxPageNumberLimit: prevState.maxPageNumberLimit + pageNumberLimit,
				minPageNumberLimit: prevState.minPageNumberLimit + pageNumberLimit,
			}));
		}
	};

	handlePrevbtn = () => {
		const { page, onPageChange, pageNumberLimit } = this.props;

		const pageNum = page - 1;
		onPageChange(pageNum);

		if ((page - 1) % this.state.maxPageNumberLimit === 0) {
			this.setState((prevState) => ({
				maxPageNumberLimit: prevState.maxPageNumberLimit - pageNumberLimit,
				minPageNumberLimit: prevState.minPageNumberLimit - pageNumberLimit,
			}));
		}
	};

	pageIncrementBtn = () => <ListItem onClick={this.handleNextbtn}> ... </ListItem>;
	pageDecrementBtn = () => <ListItem onClick={this.handlePrevbtn}> ... </ListItem>;

	render() {
		const { totalPages, page } = this.props;
		const { maxPageNumberLimit, minPageNumberLimit } = this.state;
		return (
			<Fragment>
				<PaginationWrapper>
					<PageNumberContainer>
						<ListItem>
							<Button onClick={this.handlePrevbtn} disabled={page === 1}>
								Prev
							</Button>
						</ListItem>
						{totalPages.length > maxPageNumberLimit && this.pageIncrementBtn()}
						{this.renderPageNumbers()}
						{minPageNumberLimit >= 1 && this.pageDecrementBtn()}
						<ListItem>
							<Button onClick={this.handleNextbtn} disabled={page === totalPages}>
								Next
							</Button>
						</ListItem>
					</PageNumberContainer>
				</PaginationWrapper>
			</Fragment>
		);
	}
}

export default Pagination;
