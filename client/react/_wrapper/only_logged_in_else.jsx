OnlyLoggedInElse = function (Component, ElseComponent) {
    return React.createClass({
        displayName: 'OnlyLoggedin',
        mixins: [ReactMeteorData],
        getMeteorData() {
            return {
                user: Meteor.user()
            }
        },
        render: function() {
            return ( this.data.user
                ?   <Component {...this.props} {...this.data} />
                :   ElseComponent
                    ? <ElseComponent />
                    : <span> Please log in to see this page. </span>
            );
        }
    });
};