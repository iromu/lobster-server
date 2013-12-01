package lobster.persistence.jpa.repository;

import lobster.persistence.model.Food;
import org.springframework.data.repository.CrudRepository;

/**
 * Created with IntelliJ IDEA.
 * User: wantez
 * Date: 01/12/13
 * Time: 18:25
 * To change this template use File | Settings | File Templates.
 */
public interface FoodRepository extends CrudRepository<Food, Long> {
}
