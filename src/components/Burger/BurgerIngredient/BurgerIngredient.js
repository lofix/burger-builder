import React, {Component} from 'react';
import PropTypes from 'prop-types';

import modules from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render(props) {
        let ingredient = null;
    
        switch (this.props.type) {
            case('bread-bottom'):
                ingredient = <div className={modules.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredient = (
                    <div className={modules.BreadTop}>
                        <div className={modules.Seeds1}></div>
                        <div className={modules.Seeds2}></div>    
                    </div>
                );
                break;
            case('meat'):
                ingredient = <div className={modules.Meat}></div>;
                break;
            case('cheese'):
                ingredient = <div className={modules.Cheese}></div>;
                break;
            case('bacon'):
                ingredient = <div className={modules.Bacon}></div>;
                break;
            case('salad'):
                ingredient = <div className={modules.Salad}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}
export default BurgerIngredient;