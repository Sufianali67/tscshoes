import React from "react";
import "./table.css";
import ReactTable from "react-table-6";
import { Button, Modal } from "reactstrap";
import { connect } from "react-redux";
import { getPendingUsers } from "../../store/actions/User";
import UserModal from "../../components/user/UserModal.js";

class PendingUsers extends React.Component {
  state = {
    userData: "",
    openModal: false,
  };

  async componentDidMount() {
    const { getPendingUsers, token } = this.props;
    await getPendingUsers(token);
  }

  filterMethod = (filter, row, column) => {
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined
      ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
      : true;
  };

  getTableProps = (state, rowInfo, col, instance) => ({
    onClick: (e, cb) => {
      if (rowInfo !== undefined) {
        console.log("rowData", rowInfo.original);
      }
    },
  });

  render() {
    const columns = [
      {
        Header: "Name",
        accessor: "name",
        style: { textAlign: "center" },
      },
      {
        Header: "Email",
        accessor: "email",
        style: { textAlign: "center" },
      },
      {
        Header: "Type",
        accessor: "type",
        style: { textAlign: "center" },
      },
      {
        Header: "Created At",
        accessor: "createdAt",
        style: { textAlign: "center" },
        Cell: (props) => {
          return (
            <span style={{ display: "flex" }}>{props.original.createdAt}</span>
          );
        },
      },
      {
        Header: "Actions",
        // width: 180,
        // minWidth: 120,
        // maxWidth: 250,
        sortable: false,
        filterable: false,
        resizable: false,
        Cell: (props) => {
          return (
            <span>
              <Button>
                <i class="tim-icons icon-check-2"></i>
              </Button>
              <Button
                onClick={() => {
                  this.setState({ userData: props.original, openModal: true });
                }}
              >
                <i class="tim-icons icon-badge"></i>
              </Button>
            </span>
          );
        },
      },
    ];

    const { pendingUsers } = this.props;
    const { userData, openModal } = this.state;

    return (
      <div className="content">
        <ReactTable
          data={pendingUsers}
          columns={columns}
          defaultFilterMethod={this.filterMethod}
          filterable
          style={{ backgroundColor: "white" }}
          minRows={8}
          getTdProps={this.getTableProps}
        />
        <UserModal
          isOpen={openModal}
          onClose={() => this.setState({ openModal: false })}
          userData={userData}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.AppState.Auth.token,
    pendingUsers: state.AppState.User.pendingUsers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPendingUsers: (data) => dispatch(getPendingUsers(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingUsers);
